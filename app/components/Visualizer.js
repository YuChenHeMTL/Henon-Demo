import React from 'react';
import Quickbooks from './Quickbooks';
import Tableau from './Tableau';
import BambooHR from './BambooHR';
import Hubspot from './Hubspot';

import styles from '../page.module.css';

function getComponent(data, destination) {
  if (destination === "Quickbooks") {
      return <Quickbooks data={data} />
  } else if (destination === "Tableau") {
      return <Tableau data={data} />
  } else if (destination === "BambooHR") {
      return <BambooHR data={data} />
  } else if (destination === "Hubspot") {
      return <Hubspot data={data} />
  } else {
      return (
          <div>
              Cannot find component for {destination}
          </div>
      )
  }
}

export default function Visualizer(props) {
    return (
      <div className={styles.visualizer}>
        {getComponent(props.data, props.destination)}
      </div>
    ) 
}