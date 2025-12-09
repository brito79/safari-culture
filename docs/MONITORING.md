# Monitoring & Health Checks

## Health Check Endpoint

### Endpoint
```
GET /api/health
```

### Response Codes
- `200` - System healthy, database connected
- `503` - System unhealthy, database disconnected
- `500` - System error

### Response Format

#### Healthy Response
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-11-11T18:17:00.000Z",
  "responseTime": "45ms",
  "environment": "production"
}
```

#### Unhealthy Response (503)
```json
{
  "status": "unhealthy",
  "database": "disconnected",
  "timestamp": "2024-11-11T18:17:00.000Z",
  "responseTime": "1200ms"
}
```

#### Error Response (500)
```json
{
  "status": "error",
  "database": "error",
  "error": "Connection timeout",
  "timestamp": "2024-11-11T18:17:00.000Z",
  "responseTime": "10050ms"
}
```

## Monitoring Setup

### 1. AWS CloudWatch Alarms

#### Health Check Alarm
```bash
# Create CloudWatch alarm for health check failures
aws cloudwatch put-metric-alarm \
  --alarm-name safari-culture-health-check \
  --alarm-description "Alert when health check fails" \
  --metric-name HealthCheckStatus \
  --namespace SafariCulture \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 1 \
  --comparison-operator LessThanThreshold
```

#### Response Time Alarm
```bash
# Alert on slow response times
aws cloudwatch put-metric-alarm \
  --alarm-name safari-culture-slow-response \
  --alarm-description "Alert when response time > 1s" \
  --metric-name ResponseTime \
  --namespace SafariCulture \
  --statistic Average \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 1000 \
  --comparison-operator GreaterThanThreshold
```

### 2. Uptime Monitoring

#### Using UptimeRobot (Free)
```
Monitor URL: https://your-domain.com/api/health
Interval: 5 minutes
Alert when: Status code != 200
```

#### Using AWS Route 53 Health Checks
```bash
aws route53 create-health-check \
  --type HTTPS \
  --resource-path /api/health \
  --fully-qualified-domain-name your-domain.com \
  --port 443 \
  --request-interval 30
```

### 3. Custom Monitoring Script

```bash
#!/bin/bash
# health-monitor.sh

ENDPOINT="https://your-domain.com/api/health"
SLACK_WEBHOOK="your-slack-webhook-url"

while true; do
  RESPONSE=$(curl -s -w "\n%{http_code}" "$ENDPOINT")
  HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
  BODY=$(echo "$RESPONSE" | head -n-1)
  
  if [ "$HTTP_CODE" != "200" ]; then
    # Send alert to Slack
    curl -X POST "$SLACK_WEBHOOK" \
      -H 'Content-Type: application/json' \
      -d "{\"text\":\"🚨 Health check failed: $HTTP_CODE\n$BODY\"}"
  fi
  
  sleep 300  # Check every 5 minutes
done
```

## Performance Monitoring

### Response Time Headers

All API endpoints include performance headers:

```http
X-Response-Time: 145ms
```

### Logging

#### Console Log Format
```
📊 [Server Action] Fetching experiences from database...
✅ [Server Action] Found 12 experiences
⏱️  Query completed in 145ms
```

#### Log Levels
- 📊 Info - Normal operations
- ✅ Success - Successful operations
- ⚠️  Warning - Fallback or degraded mode
- ❌ Error - Failures requiring attention
- 🔌 System - Connection/shutdown events
- 📡 Signal - Process signals (SIGTERM, SIGINT)

### CloudWatch Logs Insights Queries

#### Find Slow Queries
```
fields @timestamp, @message
| filter @message like /Query completed/
| parse @message /Query completed in (?<duration>\d+)ms/
| filter duration > 500
| sort duration desc
| limit 20
```

#### Database Errors
```
fields @timestamp, @message
| filter @message like /❌/
| filter @message like /database/i
| sort @timestamp desc
| limit 50
```

#### Health Check Failures
```
fields @timestamp, @message
| filter @message like /Health check failed/
| stats count() by bin(5m)
```

## Database Monitoring

### Connection Pool Status

Monitor these metrics in your application logs:

```typescript
// Add to your monitoring dashboard
const poolStatus = {
  activeConnections: pool._allConnections.length,
  idleConnections: pool._freeConnections.length,
  queuedRequests: pool._connectionQueue.length
};
```

### Key Metrics
- **Active Connections** - Should be < connection limit (10)
- **Idle Connections** - Should have some available
- **Queued Requests** - Should be 0 or very low

### MySQL Performance

```sql
-- Check slow queries
SELECT * FROM mysql.slow_log 
WHERE start_time > NOW() - INTERVAL 1 HOUR
ORDER BY query_time DESC;

-- Check connection count
SHOW STATUS LIKE 'Threads_connected';

-- Check table sizes
SELECT 
  table_name,
  ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.TABLES
WHERE table_schema = 'wilderness_namibia_db'
ORDER BY (data_length + index_length) DESC;
```

## Alert Thresholds

### Critical (Immediate Action)
- Health check down for > 5 minutes
- Database connection pool exhausted
- Error rate > 5%
- Response time p99 > 3000ms

### Warning (Monitor Closely)
- Health check intermittent failures
- Response time p95 > 1000ms
- Error rate > 1%
- Database connections > 80% of limit

### Info (Track Trends)
- Response time p50 > 500ms
- Cache hit rate < 80%
- Fallback to env vars (Secrets Manager)

## Dashboards

### Recommended Metrics Dashboard

```
┌─────────────────────────────────────────┐
│ Health Status        │ Uptime: 99.9%    │
├─────────────────────────────────────────┤
│ Response Times (ms)                     │
│ p50: 145  p95: 320  p99: 890           │
├─────────────────────────────────────────┤
│ Database                                │
│ Connections: 3/10  Queries/min: 450    │
├─────────────────────────────────────────┤
│ Errors (last hour)                      │
│ 5xx: 2  4xx: 15  Total: 17             │
├─────────────────────────────────────────┤
│ Cache Performance                       │
│ Hit Rate: 85%  Revalidations: 120      │
└─────────────────────────────────────────┘
```

### Grafana Dashboard (JSON)

```json
{
  "dashboard": {
    "title": "Safari Culture - Production Monitoring",
    "panels": [
      {
        "title": "Health Check Status",
        "targets": [
          {
            "expr": "health_check_status",
            "legendFormat": "Status"
          }
        ]
      },
      {
        "title": "API Response Times",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, api_response_time_bucket)",
            "legendFormat": "p95"
          }
        ]
      }
    ]
  }
}
```

## Troubleshooting

### Health Check Fails

1. **Check database connectivity**
   ```bash
   mysql -h $RDS_HOST -u $RDS_USER -p$RDS_PASSWORD
   ```

2. **Verify environment variables**
   ```bash
   echo $RDS_HOST
   echo $RDS_DATABASE
   ```

3. **Check AWS Secrets Manager**
   ```bash
   aws secretsmanager get-secret-value --secret-id $SECRET_NAME
   ```

4. **Review application logs**
   ```bash
   aws logs tail /aws/amplify/safari-culture --follow
   ```

### Slow Response Times

1. **Check database query performance**
   - Review slow query log
   - Add indexes if needed
   - Optimize complex queries

2. **Verify cache is working**
   - Check cache headers in response
   - Monitor revalidation frequency

3. **Database connection pool**
   - Increase connection limit if needed
   - Check for connection leaks

### High Error Rate

1. **Check error logs**
   ```bash
   grep "❌" logs/app.log | tail -50
   ```

2. **Database errors**
   - Connection timeouts
   - Query syntax errors
   - Permission issues

3. **AWS service issues**
   - Secrets Manager availability
   - RDS instance status
   - Network connectivity

## Best Practices

### 1. Regular Health Checks
- Monitor every 1-5 minutes
- Alert on 2+ consecutive failures
- Track uptime percentage

### 2. Performance Baselines
- Establish normal response times
- Set alerts based on deviations
- Review trends weekly

### 3. Proactive Monitoring
- Monitor before users complain
- Set up predictive alerts
- Regular performance reviews

### 4. Incident Response
- Document common issues
- Create runbooks
- Practice incident drills

---

**Related Documentation:**
- [Production Readiness Report](../PRODUCTION_READINESS.md)
- [AWS CloudWatch Docs](https://docs.aws.amazon.com/cloudwatch/)
- [Next.js Monitoring](https://nextjs.org/docs/advanced-features/measuring-performance)
