// Import openDB function from the 'idb' package
import { openDB } from 'idb';
// Initialize the IndexedDB database with the name 'jate' and version 1
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // Check if the 'jate' object store already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // If not, create the object store with a key path and auto-incrementing ID
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
  // Function to add data to the 'jate' object store
  export const putDb = async (content)  => {
    console.log('PUT to the database');
  
    
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };
  
  // Function to get all data from the 'jate' object store
  export const getDb = async () => {
    console.log('GET from the database');
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  };
  
  // Initialize the database when the module is imported
  initdb();