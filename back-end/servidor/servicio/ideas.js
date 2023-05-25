import ModelFactory from "../model/DAO/ideasFactory.js";
import config from "../config.js";

class ServicioIdeas {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerIdeas = async (email) => {
        try {
            const ideas = await this.model.obtenerIdeas(email);
            return ideas;
        } catch (error) {
            return error;
        }
    };
}

export default ServicioIdeas;
