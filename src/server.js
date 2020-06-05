import { Server, Model } from "miragejs"

export function makeServer(environment) {
  return new Server({
    environment,

    models: {
     entry: Model,
    },

    routes() {
     this.namespace = "api"
     this.get("/entries/:id", (schema, request) => {
        let id = request.params.id
        return schema.entries.find(id)
     })
     this.get("/entries", (schema, request) => {
       return schema.entries.all()
     })
    },

    seeds(server) {
     server.create("entry", {
       id: 1,
       magBin: 12,
       sector: 18,
       tic: 5646747,
       isReal: 0,
       comments: '',
       rp: 14.02156448,
       tc: 1814.311436,
       depth: 0.008880617,
       duration: 5.546121978,
       tau: 1.380058055,
       rad: 1.35264,
       mass: 0.95499998,
       teff: 5461.25,
       ra: 32.70606845,
       dec: 27.44527959,
       tmag: 11.7921,
       vmag: 12.524,
       jmag: 11.043
     });
    },
  })
}
