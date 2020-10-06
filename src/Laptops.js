import React from 'react'
import LaptopList from './LaptopList'
import './Laptops.css'
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

function Laptops() {
    return (
        <div className="laptops">
            <div className="bread">
            <Breadcrumb>
            <Breadcrumb.Item>
            <a href="/home">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/laptops">Laptops</a>
            </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="top">
            <img src="https://promotions.newegg.com/gaming/20-1673/1920x360@2x.jpg" alt=""/>
            </div>

            <div className="main">
            <LaptopList 
            id="1"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-235-318-S31.jpg"
            title="ASUS ZenBook 14 Ultra Thin and Light Laptop"
            description="4-Way NanoEdge 14 FHD, Intel Core i7-10510U, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250, Windows 10 Home, Utopia Blue, UX431FL-EH74"
            rating={4}
            price={89000}
            /> 

            <LaptopList 
            id="2"
            image="https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-472-V17.jpg"
            title="ASUS VivoBook S15 S512FL Thin and Light Laptop"
            description="15.6 FHD, Intel Core i7-10510U CPU, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250 Graphics, FingerPrint, Windows 10 Home, S512FL-NB71, Silver-Metal"
            rating={5}
            price={79000}
            />

            <LaptopList 
            id="3"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-155-458-V20.jpg?ex=2"
            title="MSI Laptop Modern 15 A10M-266"
            description="Intel Core i5 10th Gen 10210U (1.60 GHz) 8 GB Memory 256 GB NVMe SSD Intel UHD Graphics 15.6 | Windows 10 Pro 64-bit"
            rating={4}
            price={65400}
            /> 
            </div>

            <div className="main">
            <LaptopList 
            id="11"
            image="https://c1.neweggimages.com/ProductImageCompressAll1280/AJKJS200914YAkkd.jpg"
            title="Asus VivoBook S15 S532FA 15.6"
            description="FHD, Intel Core i7-10510U, 12GB DDR4 RAM, 512GB PCIe SSD, Win 10"
            rating={4}
            price={82000}
            /> 

            <LaptopList 
            id="12"
            image="https://c1.neweggimages.com/ProductImageCompressAll1280/34-316-932-V83.jpg"
            title="Acer Laptop Aspire 5 A515-55-576H "
            description="Intel Core i5 10th Gen 1035G1 (1.00 GHz) 8 GB Memory 512 GB PCIe SSD Intel UHD Graphics 15.6 Windows 10 Home 64-bit"
            rating={4}
            price={55000}
            />

            <LaptopList 
            id="13"
            image="https://c1.neweggimages.com/ProductImageCompressAll1280/AA0SS2009167FUn8.jpg"
            title="Lenovo IdeaPad S145 Notebook"
            description="15.6 HD Display, Intel Celeron N4000 Upto 2.6GHz, 8GB RAM, 128GB SSD, HDMI, UK Keyboard, Wi-Fi, Bluetooth, Windows 10 Pro"
            rating={3}
            price={42000}
            /> 
            </div>

            <div className="main">
            <LaptopList 
            id="1"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-235-318-S31.jpg"
            title="ASUS ZenBook 14 Ultra Thin and Light Laptop"
            description="4-Way NanoEdge 14 FHD, Intel Core i7-10510U, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250, Windows 10 Home, Utopia Blue, UX431FL-EH74"
            rating={4}
            price={89000}
            /> 

            <LaptopList 
            id="2"
            image="https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-472-V17.jpg"
            title="ASUS VivoBook S15 S512FL Thin and Light Laptop"
            description="15.6 FHD, Intel Core i7-10510U CPU, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250 Graphics, FingerPrint, Windows 10 Home, S512FL-NB71, Silver-Metal"
            rating={5}
            price={79000}
            />

            <LaptopList 
            id="3"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-155-458-V20.jpg?ex=2"
            title="MSI Laptop Modern 15 A10M-266"
            description="Intel Core i5 10th Gen 10210U (1.60 GHz) 8 GB Memory 256 GB NVMe SSD Intel UHD Graphics 15.6 | Windows 10 Pro 64-bit"
            rating={4}
            price={65400}
            /> 
            </div>

            <div className="main">
            <LaptopList 
            id="1"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-235-318-S31.jpg"
            title="ASUS ZenBook 14 Ultra Thin and Light Laptop"
            description="4-Way NanoEdge 14 FHD, Intel Core i7-10510U, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250, Windows 10 Home, Utopia Blue, UX431FL-EH74"
            rating={4}
            price={89000}
            /> 

            <LaptopList 
            id="2"
            image="https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-472-V17.jpg"
            title="ASUS VivoBook S15 S512FL Thin and Light Laptop"
            description="15.6 FHD, Intel Core i7-10510U CPU, 8 GB RAM, 512 GB PCIe SSD, NVIDIA GeForce MX250 Graphics, FingerPrint, Windows 10 Home, S512FL-NB71, Silver-Metal"
            rating={5}
            price={79000}
            />

            <LaptopList 
            id="3"
            image="https://c1.neweggimages.com/NeweggImage/ProductImage/34-155-458-V20.jpg?ex=2"
            title="MSI Laptop Modern 15 A10M-266"
            description="Intel Core i5 10th Gen 10210U (1.60 GHz) 8 GB Memory 256 GB NVMe SSD Intel UHD Graphics 15.6 | Windows 10 Pro 64-bit"
            rating={4}
            price={65400}
            /> 
            </div>

            <div className="block">

            </div>

                     
            
        </div>
    )
}

export default Laptops
