import produceData from "../mockData/produce.json"

const POPULATE = "produce/POPULATE";
// console.log(produceData);
export const populateProduce = produce => {
    return{
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
        const newState = {};
        action.produce.forEach(produce => {
            newState[produce.id] = produce
            
        })
        return newState;
      default:
        return state;
    }
  }