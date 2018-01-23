export const selectLibrary = (libraryId, show) => {
  return {
    type: 'select_library',
    payload: libraryId,
    bool: show
  };
};
