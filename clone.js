var nodegit = require("nodegit");
var fse = require("fs-extra");
var path = "./tmp";

fse.remove(path).then(function () {

    nodegit.Clone(
        "https://github.com/LeddaZ/NastroTestBot.git",
        path,
        {
            fetchOpts: {
                callbacks: {
                    certificateCheck: function () {
                        // github will fail cert check on some OSX machines
                        // this overrides that check
                        return 0;
                    }
                }
            }
        })
});
