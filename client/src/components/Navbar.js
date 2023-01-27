import React from 'react';
import $ from 'jquery';
import myGif2 from '../assets/login.png' ;
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    } from './NavbarElements';
import { Router, Routes } from 'react-router-dom';
function Navbar() {
  function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function(){ test(); });
  });
  

  
  // --------------add active class-on another-page move----------
  $(document).ready(function($){
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
  
    // Account for home page with empty path
    if ( path == '' ) {
      path = 'index.html';
    }
  
    var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    // Add active class to target link
    target.parent().addClass('active');
  });


  return (
    <>
    
    <nav class="navbar navbar-expand-custom navbar-mainbg">
   
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <h2 className="header--title">Watt?</h2>
        <NavLink to='/login' className="header--log"><img src={myGif2}
            
			style={{width:40,}}/> Login/Register</NavLink>
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item active">
                <NavLink to='/home' activeStyle class="nav-link" ><i class="fas fa-tachometer-alt"></i>Dashboard</NavLink>
                </li>
                <li class="nav-item ">
                <NavLink to='/maConsommation' activeStyle class="nav-link" ><i class="far fa-address-book"></i>Ma Consommation</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/conseils' activeStyle class="nav-link" ><i class="far fa-clone"></i>Conseils</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/about' activeStyle class="nav-link" ><i class="far fa-calendar-alt"></i>About us</NavLink>
                </li>
               
            </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;
