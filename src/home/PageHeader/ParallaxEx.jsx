import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}build/assets/${name}.svg${wrap ? ')' : ''}`

class ParallaxEx extends React.Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <Parallax
                ref={ref => this.parallax = ref}
                pages={1}
                scrolling={true}>


                <Parallax.Layer
                    offset={0} speed={0} factor={7}
                    style={{ backgroundImage: url('assets/img/stars', true), backgroundSize: 'cover' }}
                />

                <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={0} speed={0.5}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <div
                        style={{
                            whiteSpace: 'pre',
                            fontFamily: 'Menlo-Regular, Menlo, monospace',
                            fontSize: 30,
                            lineHeight: '10px',
                            color: 'white',
                            textAlign: "center",
                            height: '100lv'
                        }}>
                        <h1>Sorting Algorithms</h1>
                    </div>
                </Parallax.Layer>

            </Parallax>
        )
    }
}

export default ParallaxEx;
