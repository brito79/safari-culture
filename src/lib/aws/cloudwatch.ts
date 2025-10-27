// lib/aws/cloudwatch.ts
export async function logError(error: Error, context?: Record<string, any>) {
  const logs = new CloudWatchLogsClient({ region: process.env.AWS_REGION });
  
  await logs.send(new PutLogEventsCommand({
    logGroupName: '/safari-culture/errors',
    logStreamName: new Date().toISOString().split('T')[0],
    logEvents: [{
      timestamp: Date.now(),
      message: JSON.stringify({
        error: error.message,
        stack: error.stack,
        context
      })
    }]
  }));
}