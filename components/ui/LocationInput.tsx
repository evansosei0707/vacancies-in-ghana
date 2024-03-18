"use client"

import { forwardRef, useMemo, useState } from "react";
import { Input } from "./input";
import { citiesInGhana } from "@/app/data/ghanaCities";

interface LocationInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onLocationSelected: (location: string) => void;
}

export default forwardRef<HTMLInputElement, LocationInputProps> (function LocationInput({ onLocationSelected, ...props}, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);

    const cities = useMemo(() => {
        if(!locationSearchInput.trim()) return [];
        const searchWords = locationSearchInput.split(" ");

        return citiesInGhana.map((city) => `${city.city}, ${city.country}`)
        .filter((city) => city.toLowerCase().startsWith(searchWords[0].toLowerCase()) && 
        searchWords.every((word) => city.toLowerCase().includes(word.toLowerCase())))
        .slice(0,5)

    },[locationSearchInput])

        
    return (
        <div className="relative border rounded-lg border-[#d0d5dd]">
            <Input
                placeholder="Search for your city"
                type="search"
                className="border"
                value={locationSearchInput}
                onChange={(e) => setLocationSearchInput(e.target.value)}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                {...props}
                ref={ref}
            />
            {
                locationSearchInput.trim() && hasFocus && (
                <div className="absolute bg-background shadow-xl z-20 divide-y border-x border-b rounded-b-lg">
                    {!cities.length  && <p className="p-3">No results found!</p>}
                    {
                        cities.map((city, idx) => (
                            <button 
                                key={idx}
                                onMouseDown={(e) => {
                                    e.preventDefault()
                                    onLocationSelected(city)
                                    setLocationSearchInput('');
                                } }
                                className=" text-start p-2 block w-full">
                                {city}
                            </button>
                        ))
                    }
                </div>
                )
            }
        </div>
    )
})
