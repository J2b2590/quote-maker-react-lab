export default (state=[], action) => {
  let updatedQuote;
  let quote;

  switch(action.type){
    case "ADD_QUOTE":
    return [...state, action.quote]

    case "REMOVE_QUOTE":
      updatedQuote = state.filter(q => q.id !== action.quoteId)
      return updatedQuote

    case "UPVOTE_QUOTE":
      updatedQuote = state.map(q => {
        if(q.id === action.quoteId) {
          return {
            ...q,
            votes: q.votes + 1
          }
        } else {
          return q
        }
      })
      return updatedQuote

      case 'DOWNVOTE_QUOTE':
      updatedQuote = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[updatedQuote];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, updatedQuote),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(updatedQuote + 1)
        ];
      }
      return state;

    default:
      return state;
  };
  
   
}
