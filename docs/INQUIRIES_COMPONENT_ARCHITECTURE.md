# Inquiries Component Architecture Documentation

## Overview
The inquiries system has been refactored into a modular architecture with smaller, focused components for better maintainability and reusability.

## Component Structure

```
src/components/admin/inquries/
├── index.ts                 # Central exports for all components
├── Inqueries.tsx           # Main container component
├── StatsCards.tsx          # Statistics dashboard cards
├── SearchFilters.tsx       # Search and filtering controls
├── InquiriesTable.tsx      # Data table with inquiry rows
├── InquiryModal.tsx        # Detailed inquiry modal view
├── LoadingState.tsx        # Loading skeleton component
└── ErrorState.tsx          # Error display component
```

## Component Responsibilities

### 1. Inqueries.tsx (Main Container)
- **Purpose**: Orchestrates all sub-components and manages state
- **Responsibilities**:
  - Data fetching and management
  - State management for inquiries, stats, filters
  - Business logic for CRUD operations
  - Coordination between child components

### 2. StatsCards.tsx
- **Purpose**: Display key metrics and statistics
- **Props**:
  - `stats`: InquiryStats object or null
  - `className`: Optional styling
- **Features**:
  - Total inquiries count
  - Current month count
  - Top country statistics
  - Popular experience type

### 3. SearchFilters.tsx
- **Purpose**: User interface for filtering and searching
- **Props**:
  - `searchTerm`, `setSearchTerm`: Search functionality
  - `filterCountry`, `setFilterCountry`: Country filtering
  - `filterExperience`, `setFilterExperience`: Experience filtering
  - `uniqueCountries`, `uniqueExperiences`: Filter options
- **Features**:
  - Real-time search input
  - Dropdown filters
  - Clear filters functionality

### 4. InquiriesTable.tsx
- **Purpose**: Display inquiries in tabular format
- **Props**:
  - `inquiries`: Array of Contact objects
  - `onViewInquiry`: Handler for viewing details
  - `onDeleteInquiry`: Handler for deletion
- **Features**:
  - Responsive table layout
  - Contact information display
  - Travel details summary
  - Action buttons (View/Delete)

### 5. InquiryModal.tsx
- **Purpose**: Detailed view of individual inquiry
- **Props**:
  - `inquiry`: Selected Contact object
  - `isOpen`: Modal visibility state
  - `onClose`: Close handler
  - `onDelete`: Delete handler
- **Features**:
  - Full inquiry details
  - Camp interests display
  - Email reply integration
  - Delete confirmation

### 6. LoadingState.tsx
- **Purpose**: Loading skeleton during data fetch
- **Props**:
  - `className`: Optional styling
- **Features**:
  - Animated skeleton loader
  - Matches main layout structure

### 7. ErrorState.tsx
- **Purpose**: Error display with retry functionality
- **Props**:
  - `error`: Error message string
  - `onRetry`: Retry handler function
- **Features**:
  - User-friendly error display
  - Retry button functionality

## Usage Example

```typescript
import { Inquiries } from '@/components/admin/inquries';

// Use the main component
<Inquiries className="custom-styles" />

// Or import individual components if needed
import { 
  StatsCards, 
  SearchFilters, 
  InquiriesTable 
} from '@/components/admin/inquries';
```

## Benefits of Modular Architecture

### 1. **Maintainability**
- Smaller, focused files are easier to understand and modify
- Changes to one component don't affect others
- Clear separation of concerns

### 2. **Reusability**
- Individual components can be reused in other parts of the application
- Easy to test components in isolation
- Flexible composition patterns

### 3. **Development Experience**
- Faster compilation times for individual files
- Better IDE support and intellisense
- Easier debugging and error isolation

### 4. **Code Organization**
- Logical grouping of related functionality
- Clear file structure and naming conventions
- Simplified imports with index.ts

## State Management Flow

```
Inqueries.tsx (Main State)
    ↓
    ├── inquiries: Contact[]
    ├── stats: InquiryStats
    ├── loading: boolean
    ├── error: string | null
    ├── selectedInquiry: Contact | null
    ├── showModal: boolean
    └── filter states...
    
    ↓ (Props down)
    
StatsCards ← stats
SearchFilters ← filter states + handlers
InquiriesTable ← inquiries + handlers
InquiryModal ← selectedInquiry + handlers
LoadingState ← loading state
ErrorState ← error + retry handler
```

## TypeScript Integration

All components are fully typed with:
- **Interface definitions** for all props
- **Type safety** for Contact and InquiryStats
- **Generic handlers** with proper typing
- **Optional props** with defaults

## Performance Considerations

### 1. **Component Splitting Benefits**
- Smaller bundle chunks
- Better tree-shaking
- Selective re-rendering

### 2. **Memoization Opportunities**
- Components can be wrapped with React.memo if needed
- Stable callback references through useCallback
- Optimized prop drilling

### 3. **Loading Optimization**
- Separate loading states per component
- Progressive loading of UI sections
- Better perceived performance

## Future Enhancements

### 1. **Component Library Integration**
- Can be easily integrated into a shared component library
- Standardized props and styling patterns
- Documentation-ready components

### 2. **Testing Strategy**
- Unit tests for individual components
- Integration tests for component interactions
- Easier mocking and stubbing

### 3. **Storybook Integration**
- Each component can have its own story
- Visual testing and documentation
- Component playground for designers

## Migration Notes

The refactoring maintains 100% backward compatibility:
- Same functionality as the original monolithic component
- No breaking changes to the external API
- Same import path for the main Inqueries component

This modular approach significantly improves code maintainability while preserving all existing functionality.