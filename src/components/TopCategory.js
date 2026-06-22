import { ChevronLeft, ChevronRight } from 'lucide-react';
import FruitsCategoryIcon from '../assets/fruits-category-icon.svg';
import MeatCategoryIcon from '../assets/meat-category-icon.svg';
import MilkCategoryIcon from '../assets/milk-category-icon.svg';
import SnacksCategoryIcon from '../assets/snacks-category-icon.svg';
import VegetableCategoryIcon from '../assets/vegetable-category-icon.svg';
import { useState } from 'react';

export function TopCategory() {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      icon: FruitsCategoryIcon,
    },
    {
      id: 2,
      name: 'Meat',
      icon: MeatCategoryIcon,
    },
    {
      id: 3,
      name: 'Milk',
      icon: MilkCategoryIcon,
    },
    {
      id: 4,
      name: 'Snacks',
      icon: SnacksCategoryIcon,
    },
    {
      id: 5,
      name: 'Vegetable',
      icon: VegetableCategoryIcon,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const desktopVisibleCount = 3;
  const mobileVisibleCount = 2;

  const visibleCategories = Array.from(
    { length: desktopVisibleCount },
    (_, i) => categories[(startIndex + i) % categories.length]
  );

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="container mx-auto px-5 mb-[150px]">
      <div className="xl:pl-6 px-6 xl:pr-28 max-[350px]:px-0">
        <div className="mb-6 sm:mb-10 flex items-center justify-between">
          <h2 className="font-bold text-inter text-2xl sm:text-3xl lg:text-4xl truncate min-w-0 leading-normal py-1">
            Top Category
          </h2>
          <div className="flex items-center gap-5 flex-shrink-0">
            <button
              onClick={handlePrev}
              className="sm:w-10 sm:h-10 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-[#517907] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="sm:w-10 sm:h-10 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-[#517907] hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        <div
          key={startIndex}
          className="lg:px-16 flex justify-between items-center gap-3 sm:gap-6 animate-fadeIn"
        >
          {visibleCategories.map((category, index) => {
            return (
              <div
                key={category.id}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-[#FEFCEB] rounded-3xl flex flex-col gap-2 items-center justify-center w-[120px] sm:w-[170px] lg:w-[192px] h-[120px] sm:h-[145px] lg:h-[165px] flex-shrink-0 hover:bg-[#517907] hover:bg-opacity-10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer group
                ${
                  index < mobileVisibleCount
                    ? 'flex'
                    : index < desktopVisibleCount
                      ? 'hidden md:flex'
                      : 'hidden'
                } `}
              >
                <img
                  src={category.icon}
                  alt=""
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[84px] lg:h-[84px]"
                />
                <p className="truncate text-inter text-base sm:text-xl lg:text-2xl font-medium max-w-[100px] sm:max-w-[120px] lg:max-w-[140px]">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
