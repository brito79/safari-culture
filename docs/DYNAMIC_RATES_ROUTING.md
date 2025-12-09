# Dynamic Camp Rates Routing Implementation

## Overview
Successfully implemented dynamic routing for camp rates pages with proper URL slug handling and database name conversion.

## URL Structure

### Pattern
```
/camps/[camp-name-slug]/rate
```

### Examples
- `/camps/little-kulala/rate` → Displays rates for "Wilderness-Little-Kulala"
- `/camps/doro-nawas/rate` → Displays rates for "Wilderness-Doro-Nawas"
- `/camps/hoanib-skeleton-coast/rate` → Displays rates for "Wilderness-Hoanib-Skeleton-Coast"
- `/camps/damaraland-camp/rate` → Displays rates for "Wilderness-Damaraland-Camp"

## Implementation Details

### 1. Utility Functions (`src/lib/utils/camp-utils.ts`)

Created three utility functions for name/slug conversions:

```typescript
// Convert display name to URL slug
campNameToSlug("Little Kulala") → "little-kulala"

// Convert URL slug to database name
slugToCampDbName("little-kulala") → "Wilderness-Little-Kulala"

// Extract display name from database name
dbNameToCampName("Wilderness-Little-Kulala") → "Little Kulala"
```

### 2. Dynamic Route Page (`src/app/camps/[...name]/rate/page.tsx`)

**Key Features:**
- ✅ Accepts catch-all route parameter `[...name]`
- ✅ Converts URL slug to database name format
- ✅ Fetches camp rates using `getCampRatesByName()` server action
- ✅ Shows 404 if camp not found
- ✅ Displays `CampRatesTable` component with fetched data
- ✅ Includes back button to camps listing
- ✅ Includes contact CTA at bottom

**Flow:**
1. User visits `/camps/little-kulala/rate`
2. Extract slug: `"little-kulala"`
3. Convert to DB name: `"Wilderness-Little-Kulala"`
4. Fetch rates from database
5. Render `CampRatesTable` component

### 3. Updated Camps Listing (`src/components/Camps.tsx`)

**Changes:**
- ✅ Imported `campNameToSlug` utility
- ✅ Updated "View Rates" button href to use dynamic slug
- ✅ Converts camp name to lowercase slug automatically

**Before:**
```typescript
href={`/camps/${camp.id}/rates`}
```

**After:**
```typescript
href={`/camps/${campNameToSlug(camp.name)}/rate`}
```

### 4. Fixed Component Props (`src/components/camps/CampRatesTable.tsx`)

**Changes:**
- ✅ Removed incorrect `name` prop parameter
- ✅ Restored proper `CampRatesTableProps` interface
- ✅ Component now only accepts `camp: CampData` prop

**Before (Incorrect):**
```typescript
export default function CampRatesTable({ camp, name }:{ camp:CampRatesTableProps, name: string})
```

**After (Correct):**
```typescript
export default function CampRatesTable({ camp }: CampRatesTableProps)
```

## Data Flow

```
Camps Listing Page
    ↓
User clicks "View Rates" for "Little Kulala"
    ↓
Navigate to: /camps/little-kulala/rate
    ↓
Dynamic Route Handler
    ↓
Convert slug → "Wilderness-Little-Kulala"
    ↓
getCampRatesByName() Server Action
    ↓
Fetch from /api/rates
    ↓
Filter by camp name
    ↓
Transform to CampData format
    ↓
Render CampRatesTable Component
```

## Database Name Format

All camps in the rates database follow this pattern:
- **Format**: `Wilderness-{Camp-Name}`
- **Examples**:
  - `Wilderness-Little-Kulala`
  - `Wilderness-Doro-Nawas`
  - `Wilderness-Hoanib-Skeleton-Coast`
  - `Wilderness-Damaraland-Camp`

## URL Slug Format

All URL slugs are:
- Lowercase
- Hyphen-separated
- No special characters
- No "Wilderness-" prefix

**Examples**:
- `little-kulala`
- `doro-nawas`
- `hoanib-skeleton-coast`
- `damaraland-camp`

## Testing

### Test URLs
Visit these URLs to test the implementation:

1. **Little Kulala**: `http://localhost:3001/camps/little-kulala/rate`
2. **Doro Nawas**: `http://localhost:3001/camps/doro-nawas/rate`
3. **Hoanib Skeleton Coast**: `http://localhost:3001/camps/hoanib-skeleton-coast/rate`
4. **Damaraland Camp**: `http://localhost:3001/camps/damaraland-camp/rate`

### Expected Behavior
- ✅ Page loads with camp-specific rates
- ✅ Beautiful table display with all seasonal periods
- ✅ Proper currency formatting (ZAR)
- ✅ Back button returns to camps listing
- ✅ Contact CTA at bottom
- ✅ 404 page for invalid camp names

## Files Modified/Created

### Created
1. `src/lib/utils/camp-utils.ts` - Utility functions for name/slug conversion
2. `DYNAMIC_RATES_ROUTING.md` - This documentation

### Modified
1. `src/app/camps/[...name]/rate/page.tsx` - Dynamic route handler
2. `src/components/Camps.tsx` - Updated "View Rates" button
3. `src/components/camps/CampRatesTable.tsx` - Fixed props interface

## Key Benefits

1. **SEO-Friendly URLs**: Clean, readable URLs without IDs
2. **Type-Safe**: Full TypeScript support throughout
3. **Maintainable**: Centralized conversion logic in utilities
4. **Scalable**: Easy to add new camps
5. **User-Friendly**: Intuitive URL structure
6. **Consistent**: Uniform naming convention across the app

## Future Enhancements

Potential improvements:
- Add breadcrumb navigation
- Implement rate comparison between camps
- Add seasonal availability indicators
- Include special offers/promotions
- Add print/download rates functionality
