import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Cards from './Cards'


function Home() {
    return (
        <div className="home">     
        <div className="home-upper">
            <div className="home-left">
                <Link to='./laptops' className="a">
                    <h1>Laptops</h1>
                </Link>
                <Link to='./electronics' className="a">
                    <h1>Mobiles</h1>
                </Link>
                <Link to='./desktops' className="a">
                    <h1>Desktops</h1>
                </Link>

                <Link to='./router' className="a">
                    <h1>Pen Drive/ Hard Drive</h1>
                </Link>

                <Link to='./' className="a">
                    <h1>Switch</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>RAM</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>Processor</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>Motherboard</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>Power Supply</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>CPU Fan</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>Casing</h1>
                </Link>
                <Link to='./' className="a">
                    <h1>Router</h1>
                </Link>                
            </div>

            <div className="home-right">
                <Link to='./' className="aa">
                <div className="banner-1">
                <img  className="banner" src="https://promotions.newegg.com/wd/20-2002/1920x360@2x.jpg" alt=""/>
                </div>
                </Link>

                <div className="banner-2">
                <Link to='./' className="aa">
                <img className="banner1" src="https://promotions.newegg.com/home/20-1402/homepage_910x150@2x.jpg" alt=""/>               
                <img className="banner2" src="https://promotions.newegg.com/asus/20-1680/homepage_455x150@2x.jpg" alt=""/>
                </Link>
                 </div>

                 <div className="banner-3">
                 <img className="banner3" src="https://promotions.newegg.com/asus/20-1926/v2/1920x360@2x.jpg" alt=""/>
                 </div>
            </div>
            
        </div>

        <div className="home-lower">
            <h2>FEATURE PRODUCTS</h2>
            <div className="card">
            <Link to='./laptops' className='aaa'>
            <Cards 
            image='https://c1.neweggimages.com/NeweggImage/ProductImage/34-235-318-S31.jpg' 
            title="ASUS ZenBook 14 Ultra Thin and Light Laptop, 4-Way NanoEdge 14 FHD, Intel Core i7-10510U, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250, Windows 10 Home, Utopia Blue, UX431FL-EH74"
            price="89,000"
            />
            </Link>

            <Link to='./laptops' className='aaa'>
            <Cards 
            image='https://c1.neweggimages.com/ProductImageCompressAll1280/23-816-088-V48.jpg'
            title="Corsair K95 RGB PLATINUM Mechanical Gaming Keyboard, Cherry MX Brown, Backlit RGB LED, Black"
            price="12,000"
            />
            </Link>

            <Link to='./laptops' className='aaa'>
            <Cards 
            image='https://c1.neweggimages.com/ProductImageCompressAll1280/AH19S200429eQaxy.jpg'
            title="EDUP WiFi 6 Card AX 3000Mbps PCIe Network Card AX200 802.11AX 2.4Ghz/5.8Ghz with Bluetooth 5.0 & Heat Sink Wireless PCI Express Wi-Fi Adapters Dual Band Antenna for Windows 10 64-bit"
            price="6700"
            />
            </Link>

            </div>

            <Link to='./laptops' className='aa'>
                <img className="ad" src="https://promotions.newegg.com/pc/20-1931/v1/1920x360@2x.jpg" alt=""/>
            </Link>
        </div>
        </div>
    )
}

export default Home
