const fs = require ('fs')
  async function loadFile(fileDirect, clientcmd, cmdaliase) {
  
    fs.readdir(fileDirect, (err, files) => {
      if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
          if(jsfiles.length <= 0) {
            console.log("No commands to load!");
              return };
                console.log(`[Commands]\t Loaded a total amount of ${jsfiles.length} commands!`)
                  jsfiles.forEach((f, i) => {
                    let props = require(`../${fileDirect}/${f}`);
//                      console.log(`${i+1}: ${f}`);
                        clientcmd.set(props.help.name, props);
                        clientcmd.set(props.co
                          props.conf.aliases.forEach(alias => {
                            cmdaliase.set(alias, props.help.name);
      });
    });
  });
}
module.exports = loadFile;