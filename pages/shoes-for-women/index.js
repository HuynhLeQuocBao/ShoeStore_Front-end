import { Breadcum } from "@/components/section/title";
import { Women } from "@/components/section/type";
import { GenderProduct } from "@/components/section/product";
import React from "react";
import { BannerChild } from "@/components/section/banner";

export default function ShoesForWomen() {
    return (
        <div>
            <Breadcum />
            <BannerChild text="WOMEN'S" />
            <Women />
            <GenderProduct />
        </div>
    );
}
