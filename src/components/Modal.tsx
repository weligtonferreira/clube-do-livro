import { IoMdClose } from 'react-icons/io';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className='absolute top-0 left-0 backdrop-blur-[2px] bg-black/20 min-h-screen min-w-screen'>
      <div className='bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-8 max-w-2xl'>
        <IoMdClose
          size={16}
          onClick={() => onClose()}
          className='absolute top-2 right-2 cursor-pointer hover:text-red-500 transition-colors'
        />
        {children}
      </div>
    </div>
  );
}
