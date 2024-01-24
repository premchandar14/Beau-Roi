"use client"
import $ from 'jquery';
import { useEffect } from 'react';

export default function myScript() {
  useEffect(() => {
 const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // jQuery code here, executed after loading
      console.log('jQuery is loaded!');
                             $(document).ready(function(){
    $('.carousel').carousel({
            padding: 200
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
  }); // Example jQuery action
    };
  }, []);

}