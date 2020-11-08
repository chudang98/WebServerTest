exports.executeQuery = async (query) => {
  db.query(query, (err, result) => {
    if (err) {
      return false;
    }
    return result; 
  });
}