import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import React from 'react';
import styles from './index.module.scss'

export const Bundles = () => {
  const [bundles, setBundles] = useState([])
  const [selectedScents, setSelectedScents] = useState(bundles)

  useEffect(() => {
    try {
      const fetchBundles = async () => {
        const res = await fetch('https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/bundles')
        const data = await res.json()

        //Add scent property to object
        const scentProfile = data.map((bundle) => {
          if (bundle.handle === 'bun-top-squatch') {
              bundle.scentTag = ['woodsy', 'citrus']
          } else if (bundle.handle === 'bun-shower-essentials') {
              bundle.scentTag = ['woodsy', 'citrus', 'herbal']
          } else if (bundle.handle === 'bun-clean-fresh') {
              bundle.scentTag = ['woodsy', 'fresh']
          } else if (bundle.handle === 'bun-deo-soap-set') {
              bundle.scentTag = ['woodsy', 'citrus', 'rich', 'spiced', 'herbal']
          }
          //console.log(bundle.scentTag)
          return bundle
        })
        setBundles(scentProfile)
        setSelectedScents(scentProfile)
      }
      fetchBundles()
    } catch(err) {
        console.log(err)
    }
  },[])

  const getTagColor = (tag) => {
    // Get background color.
    switch(tag) {
        case 'woodsy':
            return '#165834'
        case 'citrus':
            return '#de7c00'
        case 'fresh':
            return '#006fd6'
        case 'herbal':
            return '#5a3714'
        case 'rich':
            return '#e0a17e'
        case 'spiced':
            return '#c10000'
        default: return '#165834'
    }
}

const scentTags = ['woodsy', 'citrus', 'fresh', 'herbal', 'rich', 'spiced']

const handleScentchange= (e) => {
  const filterBundles = bundles.filter(item => item.scentTag.includes(e.target.dataset.tag))
  setSelectedScents(filterBundles)
} 

  return (
    <div className={styles.container}>
      <h1>Dr. Squatch</h1>
      <section>
        <h3>Select a scent:</h3>
        <div className={styles.menu}>
          {scentTags.map((tag, i) => (
            <span onClick={handleScentchange} className={styles.button} key={i} style={{background: getTagColor(tag)}} data-tag={tag}>{tag}</span>
            ))}
        </div>
      </section>

      <section className={styles.bundleRow}>
        {selectedScents.map(({imageSrc, originalPrice, price, products_included, scentTag, title}, i) => {
          const formattedPrice = (price / 100).toFixed(2)
          return (
            <div key={i} className={styles.bundleCard}>
                <div className={styles.image}>
                    <img alt={title} src={imageSrc}  />
                </div>
                <h3>{title}</h3>
                <div className={styles.pricing}>
                    {originalPrice ? (<span>${formattedPrice}</span>) : null}
                    <span>${formattedPrice}</span>
                </div>
                <div className={styles.tagRow}>
                    {scentTag.map((tag, i) => (
                        <span key={i} className={styles.tag} style={{background: getTagColor(tag)}}>{tag}</span>
                    ))}
                </div>
                <div className={styles.included}>
                  <span className={styles.heading}>Included</span>
                    {products_included.map((product, i) => (
                      <span key={i} className={styles.product}>{product.replace('-', ' ')},&nbsp;</span>  
                      ))}
                </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
