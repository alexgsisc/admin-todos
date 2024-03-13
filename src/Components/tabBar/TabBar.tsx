// https://tailwindcomponents.com/component/radio-buttons-1
'use client'
import { setCookie } from "cookies-next";
import { useState } from "react";


interface TabBarProps {
    currentTab?: number;
    tabOptions: number[];
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4, 5], currentTab = 1 }: TabBarProps) => {

    const [selectedTab, setSelectedTab] = useState(currentTab);

    const onTabSelect = (tab: number) => {
        setSelectedTab(tab)
        setCookie('selectedTab', tab.toString(), { maxAge: 3600 * 12 * 1 })
    }

    return (
        <div className={`grid w-full ${'grid-cols-' + tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
            {
                tabOptions.map(tab => (
                    <div key={tab}>
                        <input
                            checked={selectedTab === tab}
                            onChange={() => { }}
                            type="radio"
                            id={tab.toString()}
                            className="peer hidden" />
                        <label
                            onClick={() => onTabSelect(tab)}
                            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            {tab}
                        </label>
                    </div>

                ))
            }
        </div>
    )
}
