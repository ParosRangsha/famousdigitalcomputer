import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import thumbOne from '../photos/class.jpeg'
import thumbTwo from '../photos/eftar.jpeg'
import thumbThree from '../photos/headsir.jpeg'
import thumbFour from '../photos/master.jpeg'
import thumbFive from '../photos/mimang.jpeg'
import thumbSix from '../photos/mohila.jpeg'

import Mybtn from './Mybtn';

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        button: false,
      };
  return (
    <div className="Ban bg-[#825743]">
        <Slider {...settings}>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>শিখো আজ, বদলাও আগামীর ভবিষ্যৎ</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbOne} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>প্রযুক্তির জগতে তোমার প্রথম পদক্ষেপ!</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbTwo} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>কম্পিউটার শিক্ষা, সফল জীবনের সিঁড়ি!</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbThree} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>শেখো, দক্ষ হও, এগিয়ে যাও!</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbFour} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>ডিজিটাল বিশ্বে দক্ষতার নতুন দিগন্ত!</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbFive} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='py-[20px]'>
                <div className="flex">
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h1 className='text-[35px] font-bold w-1/2 text-center'>তোমার স্বপ্ন বাস্তবায়নের সঠিক ঠিকানা!</h1>
                        <p className='w-3/4 text-justify'>বর্তমান যুগ তথ্যপ্রযুক্তির যুগ, যেখানে কম্পিউটার দক্ষতা ছাড়া এগিয়ে যাওয়া অসম্ভব। আমরা তোমাকে আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে প্রফেশনাল দক্ষতা অর্জনের সুযোগ দিচ্ছি। আমাদের উন্নত মানের কোর্স, অভিজ্ঞ প্রশিক্ষক, ও প্র্যাকটিক্যাল ক্লাস তোমাকে প্রযুক্তির জগতে আত্মবিশ্বাসী করে তুলবে।</p>
                        <Mybtn ink='/report' cap='Apply Now'/>
                    </div>
                    <div className="thumb w-1/2 flex justify-center items-center">
                        <img src={thumbSix} alt="thumb" className='h-[250px] border-[10px] border-[#fff] rounded-[30px]'/>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Banner