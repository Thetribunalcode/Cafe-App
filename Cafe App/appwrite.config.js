import { Client, Databases, Query } from 'appwrite';

//--------------------------------------------- SDK Setup ---------------------------------------------//
const client = new Client();
client
  .setEndpoint('https://backend.myconsilium.tech/v1')
  .setProject('63a2ee93a204444d7af0');

const databases = new Databases(client, '63a2eed7720f5e0cefa3');
//--------------------------------------------- Database ---------------------------------------------//
const addRecordsToDatabase = async (data) => {
  try {
    const promise = databases.createDocument(
      '63a2eed7720f5e0cefa3',
      '63a2eefdb65a5fc87330',
      data.TransactionID,
      data
    );
    return promise;
  } catch (err) {
    return err;
  }
};

const listRecordsInDatabase = () => {
  try {
    const res = databases.listDocuments(
      '63a2eed7720f5e0cefa3',
      '63a2eefdb65a5fc87330', // collectionId
      [
        Query.equal('processed', [false]),
        Query.orderDesc("$createdAt"),
        Query.limit(100)
      ]
    );
    return res;
  } catch (err) {
    return err;
  }
};

const fetchRecordByID = (eventID) => {
  try {
    const res = databases.getDocument(
      '63a2eed7720f5e0cefa3',
      '63a2eefdb65a5fc87330',
      eventID
    );
    return res;
  } catch (err) {
    return err;
  }
};

const updateRecordByID = (ID) => {
  try {
    const res = databases.updateDocument(
      '63a2eed7720f5e0cefa3',
      '63a2eefdb65a5fc87330',
      ID,
      { AmountPaid: true }
    );
    return res;
  } catch (err) {
    return err;
  }
};

const updateOrderByID = (ID) => {
  try {
    const res = databases.updateDocument(
      '63a2eed7720f5e0cefa3',
      '63a2eefdb65a5fc87330',
      ID,
      { processed: true }
    );
    return res;
  } catch (err) {
    return err;
  }
};


//--------------------------------------------- Exports ---------------------------------------------//
export {
  listRecordsInDatabase,
  addRecordsToDatabase,
  fetchRecordByID,
  updateRecordByID,
  updateOrderByID
};
