import HeadPhonesIcon from '../assets/headphones-icon.svg';
import ShieldIcon from '../assets/shield-icon.svg';
import RestartIcon from '../assets/restart-icon.svg';
import TrashIcon from '../assets/trash-icon.svg';

export function Features() {
  const features = [
    { icon: HeadPhonesIcon, title: 'Support 24 h', desc: 'Dedicated support' },
    {
      icon: ShieldIcon,
      title: 'Secure Payment',
      desc: 'ensure your money is safe',
    },
    {
      icon: RestartIcon,
      title: 'Refundable',
      desc: 'Damage items can refund it',
    },
    { icon: TrashIcon, title: 'Free Shipping', desc: 'Order over 40$' },
  ];

  return (
    <div className="container mx-auto px-5 mb-[100px]">
      <div className=" lg:px-[125px] px-[80px] max-md:px-[30px] flex-wrap gap-8 flex items-center justify-between">
        {features.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-center gap-5 min-w-0 max-w-full hover:-translate-y-1 transition-transform duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="flex-shrink-0 w-10 h-10"
              />
              <div className="min-w-0">
                <h3 className="font-opensans font-bold text-sm sm:text-base lg:text-xl truncate">
                  {item.title}
                </h3>
                <p className="font-opensans text-sm sm:text-base lg:text-xl truncate">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
