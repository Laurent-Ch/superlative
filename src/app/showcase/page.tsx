"use client";

import ModalContext from "@/src/lib/context/ModalContext";
import Modal from "@/src/ui/components/Modal";
import { useContext } from "react";

export default function Page() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[50vh] w-[50vw] border-2 border-blue-500 ">
      <p>Showcase page</p>
      <hr />
      <button onClick={toggleModal}>Click</button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quos nam similique consequatur a non fugiat molestias atque ea
            deserunt quibusdam quis sunt facere numquam commodi laboriosam harum
            voluptatum expedita?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam voluptatem beatae quisquam corrupti
            quaerat, pariatur inventore optio harum vitae, illo est perferendis
            porro ex atque aspernatur autem! Porro, placeat sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex cumque, fugit
            distinctio quisquam dolore pariatur architecto repellat? Voluptate
            ab, necessitatibus nihil repellendus dolorem dolores iste sit sequi
            exercitationem tempore nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quos nam similique consequatur a non fugiat molestias atque ea
            deserunt quibusdam quis sunt facere numquam commodi laboriosam harum
            voluptatum expedita?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam voluptatem beatae quisquam corrupti
            quaerat, pariatur inventore optio harum vitae, illo est perferendis
            porro ex atque aspernatur autem! Porro, placeat sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex cumque, fugit
            distinctio quisquam dolore pariatur architecto repellat? Voluptate
            ab, necessitatibus nihil repellendus dolorem dolores iste sit sequi
            exercitationem tempore nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quos nam similique consequatur a non fugiat molestias atque ea
            deserunt quibusdam quis sunt facere numquam commodi laboriosam harum
            voluptatum expedita?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam voluptatem beatae quisquam corrupti
            quaerat, pariatur inventore optio harum vitae, illo est perferendis
            porro ex atque aspernatur autem! Porro, placeat sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex cumque, fugit
            distinctio quisquam dolore pariatur architecto repellat? Voluptate
            ab, necessitatibus nihil repellendus dolorem dolores iste sit sequi
            exercitationem tempore nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quos nam similique consequatur a non fugiat molestias atque ea
            deserunt quibusdam quis sunt facere numquam commodi laboriosam harum
            voluptatum expedita?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam voluptatem beatae quisquam corrupti
            quaerat, pariatur inventore optio harum vitae, illo est perferendis
            porro ex atque aspernatur autem! Porro, placeat sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex cumque, fugit
            distinctio quisquam dolore pariatur architecto repellat? Voluptate
            ab, necessitatibus nihil repellendus dolorem dolores iste sit sequi
            exercitationem tempore nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            quos nam similique consequatur a non fugiat molestias atque ea
            deserunt quibusdam quis sunt facere numquam commodi laboriosam harum
            voluptatum expedita?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam voluptatem beatae quisquam corrupti
            quaerat, pariatur inventore optio harum vitae, illo est perferendis
            porro ex atque aspernatur autem! Porro, placeat sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex cumque, fugit
            distinctio quisquam dolore pariatur architecto repellat? Voluptate
            ab, necessitatibus nihil repellendus dolorem dolores iste sit sequi
            exercitationem tempore nam.
          </div>
        </Modal>
      )}
    </div>
  );
}
