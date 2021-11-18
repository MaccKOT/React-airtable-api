import Airtable from 'airtable';

// api keys are confidential

const apiKey = process.env.REACT_APP_AIRTABLE_API;
const baseId = process.env.REACT_APP_AIRTABLE_BASEID;

// console.log(apiKey, baseId);

const base = new Airtable({ apiKey }).base(baseId);

export default base;
