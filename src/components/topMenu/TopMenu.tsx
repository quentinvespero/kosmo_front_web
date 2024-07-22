import React, { useEffect, useRef } from 'react'
import SearchField from '../header/SearchField'
import FeedSelector, { FeedSelectorProps } from './FeedSelector'
import { ScreenProps } from '../../interfaces/interfaces'
import { delayBooleanResponse, delayHidingElementDisplayProperty } from '../../functions/delayedToggle'
// import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import { InnerSectionProps } from '../innerSections/InnerSection'

export interface TopMenuProps {
    setTopmenuIsSticky: (topmenuIsSticky:boolean) => void
    topmenuIsSticky: boolean
    // screenFormat: ScreenProps['screenFormat']
    selectedFeed: FeedSelectorProps['selectedFeed']
    setSelectedFeed: FeedSelectorProps['setSelectedFeed']
    selectedViewType?: ViewTypeSelectorProps['selectedViewType']
    currentInnerSection: InnerSectionProps['currentInnerSection']
    setCurrentInnerSection: InnerSectionProps['setCurrentInnerSection']
    setTopMenuHeight: (heigh:number) => void
}

const TopMenu:React.FC<TopMenuProps & ScreenProps> = ({setTopmenuIsSticky, topmenuIsSticky, screenFormat, selectedFeed, setSelectedFeed, selectedViewType, setCurrentInnerSection, currentInnerSection, setTopMenuHeight}) => {

    // const displayProperty = delayHidingElementDisplayProperty(selectedViewType !== 'columnsView', 400)
    // const delayedTopMenuIsSticky = delayBooleanResponse(topmenuIsSticky,280)
    const delayedHidingTopMenu = delayBooleanResponse(selectedViewType !== 'columnsView',400)

    // const for the topMenu's height
    const topMenuHeightRef = useRef<HTMLDivElement>(null)

    // useEffect to set the height of TopMenu (if exist) to setTopMenuHeight
    // the useEffect is triggered everytime screenFormat changes, so the height is calculated if the user go from a screen size to another (at least in the ranges mobile/tablet/desktop set in screenFormat)
    useEffect(() => {
        if (topMenuHeightRef.current) setTopMenuHeight(topMenuHeightRef.current.offsetHeight)
    }, [screenFormat])

    // the function used to handle the scroll, and then use its value as part of the function to define if the TopMenu is sticky or not
    const handleScroll = () => {
        if (window.scrollY <= 250) setTopmenuIsSticky(false)
        else setTopmenuIsSticky (window.scrollY >= 250)
    }

    // getting the value of scroll
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`topMenu 
                ${selectedViewType !== 'columnsView' ? topmenuIsSticky ? 'topMenu-sticky' : '': ''}
                ${selectedViewType === 'columnsView' ? 'topMenu-hidden' : 'topMenu-visible'}
            `} 
            style={{
                margin: screenFormat==='mobile' && topmenuIsSticky ? '0rem .5rem' : '',
                maxWidth: topmenuIsSticky && screenFormat === 'mobile' ? '90%' : '',
                borderRadius: screenFormat ==='mobile' ? '1rem' : '4rem',
                padding: screenFormat ==='mobile' ? '.7rem' : '.25rem',
                // display: displayProperty
                display: delayedHidingTopMenu ? 'flex' : 'none'
            }}
            ref={topMenuHeightRef}
        >
            {screenFormat !=='mobile' && <SearchField/>}

            <FeedSelector 
                screenFormat={screenFormat} 
                topmenuIsSticky={topmenuIsSticky} 
                selectedFeed={selectedFeed} 
                setSelectedFeed={setSelectedFeed}
                setCurrentInnerSection={setCurrentInnerSection}
                currentInnerSection={currentInnerSection}
            />
        </div>
    )

}

export default TopMenu