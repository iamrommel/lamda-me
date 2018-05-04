export function handler(event, context, callback) {

  const updateName = 'Rain Goat'

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: updateName})
  })
}
