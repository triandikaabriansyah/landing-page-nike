import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App(){
    return(
        <div className="Parentbox">
            <FotoProduk/>
            <ProdukInfo category="SNEAKER" name="Nike Jordan" isDiscount="yes"/> 
        </div>
    );
}

function FotoProduk(){
    return(
    <div className="Foto">
        <img src="sepatu.jpg" />
    </div>        
    )
}

function CheckDiscount(props){
    const {isDiscount, discount} = props;
    if(isDiscount == "yes"){
        return(
            <p>Diskon {discount}%</p>
        );
    }
    else if(isDiscount == "coming"){
        return(
            <p>Akan ada diskon</p>
        )
    }
    else{
        return(
            <p>Belum ada diskon</p>
        )
    }
}

function ProdukInfo(props){
    const {category, name, isDiscount} = props;
    const benefits = ["Warna segar","Bahan klasik", "Design Baru"]
    const price =  2299000;
    const listBenefits = benefits.map((itemBenefits) =>
        <li key={itemBenefits}>{itemBenefits}</li>
    );
    return(
    <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={20}/>
        <p className="Info">Air Jordan (kadang-kadang disingkat AJ) adalah merek sepatu basket, pakaian atletik, kasual, dan gaya Amerika yang diproduksi oleh Nike. ... Sepatu itu dirancang untuk Nike oleh Peter Moore, Tinker Hatfield, dan Bruce Kilgore.</p>
        <ul>
            <li>{listBenefits}</li>
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Tambah ke keranjang</a>
    </div>
    );
}

function TambahCart(e){
    return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
    discount: PropTypes.number.isRequired
  };

export default App;
