const fs = require ('fs')
  async function eload(eFile, client) {

    fs.readdir("./events/", (err, files) => {
      if (err) return console.error(err);
        files.filter(file => {
          let eventFunction = require(`../${eFile}/${file}`);
            let eventName = file.split(".")[0];
              if(eventFunction.length <= 0) {
                console.log("No Events to load!")
                  return}
                    client.on
                      (eventName, (...args) => eventFunction.run(client, ...args))});
                        console.log(`[Events]\t Loaded a total amount of ${files.length} events!`);
  });
}
module.exports = eload;