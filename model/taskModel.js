const { executeQuery } = require('./queryBuilder')

exports.createTask = async (params) => {
  const query = `insert into tasks(name, duration) values ('${param.name}', ${params.duration});`;
  return executeQuery(query);
}