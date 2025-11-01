import { getCampRatesByName, getAllCampRates } from '@/app/actions/rates/rates';
import CampRatesTable from '@/components/camps/CampRatesTable';

export default async function TestRatesPage() {
  // Test fetching all camp rates
  const allRates = await getAllCampRates();
  
  // Test fetching a specific camp (using the first camp from allRates if available)
  const specificCamp = allRates.length > 0 
    ? await getCampRatesByName(allRates[0].name)
    : null;

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-2">Camp Rates Display Test</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Testing the CampRatesTable component with live data
      </p>
      
      {/* All Camps Section - Using CampRatesTable Component */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-2">All Camps with Rates</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Displaying {allRates.length} camp{allRates.length !== 1 ? 's' : ''} using the CampRatesTable component
          </p>
        </div>
        
        <div className="space-y-12">
          {allRates.map((camp) => (
            <div key={camp.name}>
              <CampRatesTable camp={camp} />
            </div>
          ))}
        </div>
      </section>

      {/* Specific Camp Section - Single Camp Test */}
      {specificCamp && (
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-2">
              Single Camp Test
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Testing getCampRatesByName(&quot;{specificCamp.name}&quot;)
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
            <CampRatesTable camp={specificCamp} />
          </div>
        </section>
      )}

      {/* Raw JSON Output */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Raw JSON Output</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
          <pre className="text-sm">
            {JSON.stringify({ allRates, specificCamp }, null, 2)}
          </pre>
        </div>
      </section>
    </div>
  );
}
