import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About insanalytics learn">
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
        <h1>About insanalytics learn</h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#5c6370' }}>
          insanalytics learn is a training platform built by practitioners — PhDs and industry veterans
          with real-world experience deploying AI and automation at scale.
        </p>
        <h2>Our approach</h2>
        <p>
          We don't believe in one-size-fits-all curricula. Each topic on this platform is owned and
          structured by a domain expert who decides what format best serves the material — whether
          that's a curated guide, hands-on examples, or a project you build and deploy yourself.
        </p>
        <h2>Who this is for</h2>
        <p>
          Corporate professionals and technical practitioners looking to build practical, deployable
          skills in AI and automation. We assume you're intelligent and short on time — so we focus
          on what matters.
        </p>
        <h2>Contact</h2>
        <p>
          Reach out at <a href="mailto:learn@insanalytics.com">learn@insanalytics.com</a> for
          questions about training programs or content.
        </p>
      </main>
    </Layout>
  );
}
