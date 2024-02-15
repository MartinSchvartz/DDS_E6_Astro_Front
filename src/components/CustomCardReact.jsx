import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function CustomCard({ incident }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzFwUDcaROmjEfjG1IbkkAzo4A_5X1di2Sg&usqp=CAU"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Incidente ID: {incident.id}</p>
          <p className="text-small text-default-500"></p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Observaciones: {incident.observaciones}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button color="primary" onPress={onOpen}>Mas info.</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Detalles
                </ModalHeader>
                <ModalBody>
                  <ul>
                    <li>
                      <strong>Fecha: </strong> {incident.fecha}
                    </li>
                    <li>
                      <strong>Cierre: </strong> {incident.cierre}
                    </li>
                    <li>
                      <strong>Comunidad: </strong> {incident.comunidad.nombre}
                    </li>
                    <li>
                      <strong>Servicio: </strong> {incident.servicio.nombre}
                    </li>
                    <li>
                      <strong>Usuario de cierre: </strong>{" "}
                      {incident.usuarioCierre.username}
                    </li>
                    <li>
                      <strong>Usuario Informador: </strong>{" "}
                      {incident.usuarioInformador.username}
                    </li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  );
}

{
  /* <ul>
  <li>
    <strong>Fecha:</strong> {incident.fecha}
  </li>
  <li>
    <strong>Cierre:</strong> {incident.cierre}
  </li>
  <li>
    <strong>Observaciones:</strong> {incident.observaciones}
  </li>
  <li>
    <strong>Comunidad ID:</strong> {incident.comunidad_id}
  </li>
  <li>
    <strong>Servicio ID:</strong> {incident.servicio_id}
  </li>
  <li>
    <strong>Usuario Cierre ID:</strong> {incident.usuarioCierre_id}
  </li>
  <li>
    <strong>Usuario Informador ID:</strong> {incident.usuarioInformador_id}
  </li>
  </ul> */
}
