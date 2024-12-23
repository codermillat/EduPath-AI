import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import UniversityCard from './UniversityCard';
import { useUniversitySearch } from './useUniversitySearch';
import { School, AlertCircle } from 'lucide-react';

// Dynamic filters based on most common countries in the dataset
const filters = [
  'United States',
  'India',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Brazil',
  'China'
];

export default function SearchUniversity() {
  const {
    query,
    selectedFilters,
    results,
    isLoading,
    error,
    handleSearch,
    handleFilterToggle
  } = useUniversitySearch();

  const displayResults = results.slice(0, 50); // Limit display to first 50 results for better performance

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <School className="h-8 w-8 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">University Search</h2>
          </div>
          <p className="text-gray-600">Search from thousands of universities worldwide</p>
        </div>

        <SearchBar 
          query={query}
          onSearch={handleSearch}
        />

        <FilterBar 
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterToggle={handleFilterToggle}
        />

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            {results.length > 0 ? (
              <>
                <div className="text-sm text-gray-600 mb-4">
                  Found {results.length} universities
                  {results.length > 50 && ' (showing first 50)'}
                </div>
                <div className="grid gap-6">
                  {displayResults.map((university) => (
                    <UniversityCard 
                      key={university.id}
                      university={university}
                    />
                  ))}
                </div>
              </>
            ) : (
              query || selectedFilters.length > 0 ? (
                <div className="text-center py-12">
                  <School className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No universities found matching your criteria.</p>
                  <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
                </div>
              ) : null
            )}
          </>
        )}
      </div>
    </div>
  );
}