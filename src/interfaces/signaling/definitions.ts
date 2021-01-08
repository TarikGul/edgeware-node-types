export default {
  types: {
    ProposalRecord: {
      index: 'u32',
      author: 'AccountId',
      stage: 'VoteStage',
      transition_time: 'u32',
      title: 'Text',
      contents: 'Text',
      vote_id: 'u64',
    },
    ProposalContents: 'Bytes',
    ProposalTitle: 'Bytes',
  }
};
