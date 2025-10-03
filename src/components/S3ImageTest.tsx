"use client";

// S3 Test Component - Test bucket permissions and image loading
// Testing your specific bucket: namibiawilderness-image-store

import Image from 'next/image';

export default function S3ImageTest() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  
  // Test your specific image variations
  const testImages = [
    {
      name: 'Your specific file (JPG uppercase)',
      url: `${baseUrl}/images/doro-nawas/Wilderness-Doro-Nawas_8.JPG`,
      description: 'The exact file you mentioned'
    },
    {
      name: 'File 1 (jpg lowercase)', 
      url: `${baseUrl}/images/doro-nawas/Wilderness-Doro-Nawas_1.jpg`,
      description: 'Testing with lowercase extension'
    },
    {
      name: 'File 2 (jpg lowercase)',
      url: `${baseUrl}/images/doro-nawas/Wilderness-Doro-Nawas_2.jpg`, 
      description: 'Another test image'
    },
    {
      name: 'Hero image test',
      url: `${baseUrl}/images/hero-home/1741347488261_Final-Hoanib-11.jpg`,
      description: 'Testing hero image from S3'
    }
  ];

  return (
    <div className="p-6 bg-blue-50 m-4 rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">🧪 S3 Bucket Test</h2>
      
      <div className="mb-4 p-3 bg-blue-100 rounded">
        <p className="text-sm text-blue-700">
          <strong>Testing bucket:</strong> namibiawilderness-image-store
          <br />
          <strong>Region:</strong> us-east-1
          <br />
          <strong>Base URL:</strong> {baseUrl}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testImages.map((image, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white">
            <h3 className="font-semibold mb-2">{image.name}</h3>
            <p className="text-xs text-gray-600 mb-3">{image.description}</p>
            
            {/* Image Container */}
            <div className="relative w-full h-48 bg-gray-100 rounded mb-3 overflow-hidden">
              <Image
                src={image.url}
                alt={`Test image ${index + 1}`}
                fill
                className="object-cover"
                onLoad={() => {
                  console.log(`✅ SUCCESS: ${image.name}`, image.url);
                }}
                onError={(e) => {
                  console.log(`❌ FAILED: ${image.name}`, image.url);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.backgroundColor = '#ef4444';
                  target.style.color = 'white';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.style.fontSize = '14px';
                  target.style.fontWeight = 'bold';
                  target.innerHTML = `❌ FAILED TO LOAD`;
                }}
              />
            </div>
            
            {/* Direct Link Test */}
            <div className="space-y-2">
              <a 
                href={image.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm block"
              >
                🔗 Open in new tab
              </a>
              <p className="text-xs text-gray-500 break-all">{image.url}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h4 className="font-semibold text-yellow-800 mb-2">📋 Test Instructions:</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
          <li>Look for images that load successfully (no red error boxes)</li>
          <li>Click &quot;Open in new tab&quot; links to test direct access</li>
          <li>Check browser console (F12) for success/error logs</li>
          <li>If all show red errors, bucket policy needs to be added</li>
          <li>If some work, note which file naming convention works</li>
        </ol>
      </div>

      {/* Expected Results */}
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
        <h4 className="font-semibold text-green-800 mb-2">✅ Expected Results (when working):</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
          <li>Images display instead of red error boxes</li>
          <li>Direct links open images in browser</li>
          <li>Console shows success messages</li>
          <li>No &quot;Access Denied&quot; errors</li>
        </ul>
      </div>
    </div>
  );
}