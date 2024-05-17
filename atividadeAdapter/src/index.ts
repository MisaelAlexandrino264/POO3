import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const entrega: ICorreios = new TransportadoraAdapter(new Transportadora);

entrega.sendCorreios();
entrega.receiveCorreios();
