const newman = require("newman")

newman.run({
    collection: "json-collection/raisya.postman_collection.json",
    reporters: ["cli", "htmlextra"]
})
