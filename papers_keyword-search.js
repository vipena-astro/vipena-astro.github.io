window.onload = function(){
    output=document.getElementById('output');
    output.innerHTML = all;
    MathJax.typeset();
};

var all="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Abac, A. G., <i>et al.</i></td>\
        <td>Search for Eccentric Black Hole Coalescences during the Third Observing Run of LIGO and Virgo</td>\
        <td>ApJ, 973, 132<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad65ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2308.03822>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...973..132A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Acuña, L.,<br>Deleuil, M., &<br>Mousis, O.</td>\
        <td>Interior-atmosphere modelling to assess the observability of rocky planets with JWST</td>\
        <td>A&A, 677, A14<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202245736>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01250>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...677A..14A/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Ahmed, F.,<br> Sakallı, İ., <br>Al-Badawi, A., &<br>Bouzenada, A.</td>\
        <td>Scalar, vector perturbations and effective Hawking radiation of cylindrical black holes in \\(f(\mathcal{R})\\) and Ricci-inverse gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.00060>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250100060A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Alfaro, J., <br>Espriu, D., &<br>Gabbanelli, L.</td>\
        <td>Bose-Einstein graviton condensate in a Schwarzschild black hole</td>\
        <td>CQGr, 35, 015001<br>\
        <a context=citet href=https://doi.org/10.1088/1361-6382/aa9771>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1609.01639>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018CQGra..35a5001A/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Alsina Ballester, E.,<br>Belluzzi, L.,<br>Trujillo Bueno, J.</td>\
        <td>The transfer of polarized radiation in resonance lines with partial frequency redistribution, \\(J\\)-state interference, and arbitrary magnetic fields. A radiative transfer code and useful approximations</td>\
        <td>A&A, 664, A76<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202142934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2204.12523>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..76A/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Apte, A. &<br>Hugh, S. A.</td>\
        <td>Exciting black hole modes via misaligned coalescences.<br>I. Inspiral, transition, and plunge trajectories using a generalized Ori-Thorne procedure</td>\
        <td>Phys. Rev. D, 100, 084031<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.100.084031>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1901.05901>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD.100h4031A/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Arredondo, J. N., <br>Klein, A., &<br>Yunes, N.</td>\
        <td>Efficient gravitational-wave model for fully-precessing and moderately eccentric, compact binary inspirals</td>\
        <td>Phys. Rev. D, 110, 044044<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.044044>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.06804>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110d4044A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Barack, L. &<br>Cutler, C.</td>\
        <td>LISA capture sources: Approximate waveforms, signal-to-noise ratios, and parameter estimation accuracy</td>\
        <td>Phys. Rev. D, 69, 082005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.69.082005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/0310125>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004PhRvD..69h2005B/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Baruteau, C., <br>Fromang, S., <br>Nelson, R. P., &<br>Masset, F.</td>\
        <td>Corotation torques experienced by planets embedded in weakly magnetized turbulent discs</td>\
        <td>A&A, 533, A84<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201117227>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1107.2774>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2011A%26A...533A..84B/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Baumann, D., <br>Bertone, G., <br>Stout, J., &<br>Tomaselli, G. M.</td>\
        <td>Ionization of gravitational atoms</td>\
        <td>Phys. Rev. D, 105, 115036<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.105.115036>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2112.14777>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022Phys. Rev. D.105k5036B/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Belenkaya, E. S.,<br>Khodachenko, M. L., &<br>Alexeev, I. I.</td>\
        <td>Alfvén Radius: A Key Parameter for Astrophysical Magnetospheres</td>\
        <td>Lammer, H. & Khodachenko, M. (eds). <i>Characterizing stellar and exoplanetary environments</i>, Astrophysics and Space Science Library, Volume 411,  pp. 239&ndash;249. Springer, Cham<br>\
        <a context=citet href=https://doi.org/10.1007/978-3-319-09749-7_12>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015ASSL..411..239B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Bellovary, J. M., Mac Low, M.-M., <br>McKernan, B., &<br>Ford, K. E. S.<br></td>\
        <td>Migration traps in disks around supermassive black holes</td>\
        <td>ApJL, 819, L17<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8205/819/2/L17>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1511.00005>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2016ApJ...819L..17B/abstract>ADSAbs</a></td>\
        <td>2016</td>\
    </tr>\
    <tr>\
        <td>Benáček, J., <br>Muñoz, P. A., <br>Büchner, J., &<br>Jessner, A.</td>\
        <td>Streaming instability in neutron star magnetospheres: No indication of soliton-like waves</td>\
        <td>A&A, 683, A69<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202348087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15613>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...683A..69B/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Bice, C. P. &<br>Toomre, J.</td>\
        <td>Nature of intense magnetism and differential rotation in convective dynamos of M-dwarf stars with tachoclines</td>\
        <td>ApJ, 947, 36<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acac78>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...36B/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Blanchet, L.</td>\
        <td>Gravitational radiation from Post-Newtonian sources and inspiralling compact binaries</td>\
        <td>LRR, 17, 2<br>\
        <a context=citet href=https://doi.org/10.12942/lrr-2014-2>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1310.1528>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014LRR....17....2B/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Bovy, J.</td>\
        <td>Galpy: A Python library for galactic dynamics</td>\
        <td>ApJS, 216, 29<br>\
        <a context=citet href=https://doi.org/10.1088/0067-0049/216/2/29>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1412.3451>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2015ApJS..216...29B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Braileanu, B. P. &<br>Keppens, R.</td>\
        <td>Two-fluid implementation in MPI-AMRVAC with applications to the solar chromosphere</td>\
        <td>A&A, 664, A55<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243630>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2205.05049>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..55B/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Bucciotti, B., <span id='bucciottietal' onclick='Bucciottietal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Ringdown nonlinearities in the eikonal regime</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.17950>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250117950B/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Cantiello, M., <br>Jermyn, A., &<br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>)</td>\
        <td>Stellar evolution in AGN disks</td>\
        <td>ApJ, 910, 94<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abdf4f>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2009.03936>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...910...94C/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Capozziello, S., <br>Capriolo, M., &<br>Nojiri, S.</td>\
        <td>Gravitational waves in \\(f(Q)\\) non-metric gravity via geodesic deviation</td>\
        <td>Phys. Lett. B, 850, 138510<br>\
        <a context=citet href=https://doi.org/10.1016/j.physletb.2024.138510>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.06424>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhLB..85038510C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Carballo-Rubio, D., <span id='carballorubioetal' onclick='CarballoRubioetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Towards a non-singular paradigm of black hole physics</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.05505>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250105505C/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Cashen, B., <br>Aker, A., &<br>Kesden, M.</td>\
        <td>Gravitomagnetic dynamical friction</td>\
        <td>Phys. Rev. D, 95, 064014<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.064014>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1610.01590>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017Phys. Rev. D..95f4014C/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Cattorni, F. &<br>Giacomazzo, B.</td>\
        <td>GRMHD study of accreting massive black hole binaries in astrophysical environment: A review</td>\
        <td>Astropart. Phys., 154, 102892<br>\
        <a context=citet href=https://doi.org/10.1016/j.astropartphys.2023.102892>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.02521>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024APh...15402892C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Chakraborty, C., <br>Patil, P., &<br>Akash, G.</td>\
        <td>Magnetic Penrose process in the magnetized Kerr spacetime</td>\
        <td>Phys. Rev. D, 109, 064062<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.064062>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13347>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f4062C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Cheunchitra, T., <br>Melatos, A,, <br>Carlin, J. B., &<br>Howitt, G.</td>\
        <td>Persistent gravitational radiation from glitching pulsars.<br>II. Updated scaling with vortex number</td>\
        <td>MNRAS, 528, 1360<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae130>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.05600>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.1360C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Chirikov, B.</td>\
        <td>A universal instability of many-dimensional oscillator systems</td>\
        <td>Phys. Rep., 52, 263<br>\
        <a context=citet href=https://doi.org/10.1016/0370-1573(79)90023-1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1979PhR....52..263C/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Chruściel, P. T., <br>Costa, J. L., &<br>Heusler, M.</td>\
        <td>Stationary black holes: Uniqueness and beyond</td>\
        <td>LRR, 15, 7<br>\
        <a context=citet href=https://doi.org/10.12942/lrr-2012-7>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1205.6112>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2012LRR....15....7C/abstract>ADSAbs</a></td>\
        <td>2012</td>\
    </tr>\
    <tr>\
        <td>Cloutier, S., <br>Cameron, R. H., &<br>Gizon, L.</td>\
        <td>A Babcock-Leighton dynamo model of the Sun incorporating toroidal flux loss and the helioseismically inferred meridional flow</td>\
        <td>A&A, 680, A42<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347022>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.17328>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...680A..42C/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Conway, J. T.</td>\
        <td>Analytical solutions for the Newtonian gravitational field induced by matter within axisymmetric boundaries</td>\
        <td>MNRAS, 316, 540<br>\
        <a context=citet href=https://doi.org/10.1046/j.1365-8711.2000.03523.x>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2000MNRAS.316..540C/abstract>ADSAbs</a></td>\
        <td>2000</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B.</td>\
        <td>Three-dimensional initial data for the collision of two black holes. II. Quasicircular orbits for equal-mass black holes</td>\
        <td>Phys. Rev. D, 50, 5025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.50.5025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9404043>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1994Phys. Rev. D..50.5025C/abstract>ADSAbs</a></td>\
        <td>1994</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B., <span id='cooketal' onclick='Cooketal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Three-dimensional initial data for the collision of two black holes</td>\
        <td>Phys. Rev. D, 47, 1471<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.47.1471>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1993Phys. Rev. D..47.1471C/abstract>ADSAbs</a></td>\
        <td>1993</td>\
    </tr>\
    <tr>\
        <td>Creci, G., <br>van Gemeren, I., <br>Hniderer, T., &<br>Steinhoff, J.</td>\
        <td>Tidal effects in gravitational waves from neutron stars in scalar-tensor theories of gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.06620>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241206620C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Cutler, C. &<br>Flanagan, É. É.</td>\
        <td>Gravitational waves from merging compact binaries: How accurately can one extract the binary's parameters from the inspiral waveform?</td>\
        <td>Phys. Rev. D, 49, 2658<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.49.2658>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9402014>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1994PhRvD..49.2658C/abstract>ADSAbs</a></td>\
        <td>1994</td>\
    </tr>\
    <tr>\
        <td>Das, P., <span id='dasetal' onclick='Dasetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Pulse profiles of accreting neutron stars from GRMHD simulations</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.16528>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241116528D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>De Falco, V., <br>Battista, E., <br>Usseglio, D., &<br>Capozziello, S.</td>\
        <td>Radiative losses and radiation-reaction effects at the first post-Newtonian order in Einstein-Cartan theory</td>\
        <td>Eur. Phys. Jour. C, 84, 137<br>\
        <a context=citet href=https://doi.org/10.1140/epjc/s10052-024-12476-4>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13374>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..137D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Dhurandhar, S. V. &<br> Tinto, M.</td>\
        <td>Astronomical observations with a network of detectors of gravitational waves.<br>I. Mathematical framework and solution of the five detector problem</td>\
        <td>MNRAS, 234, 663<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/234.3.663>DOI</a>\
         | <\href=https://ui.adsabs.harvard.edu/abs/1988MNRAS.234..663D/abstract>ADSAbs</a></td>\
        <td>1988</td>\
    </tr>\
    <tr>\
        <td>Tinto, M. &<br>Dhurandhar, S.</td>\
        <td>Astronomical observations with a network of detectors of gravitational waves.<br>II. Solution to the four and three detector problem</td>\
        <td>MNRAS, 236, 621<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/236.3.621>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1989MNRAS.236..621T/abstract>ADSAbs</a></td>\
        <td>1989</td>\
    </tr>\
    <tr>\
        <td>Dietrich, T., <span id='dietrichetal' onclick='Dietrichetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the mass ratio</td>\
        <td>Phys. Rev. D, 95, 024029<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.024029>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1607.06636>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017PhRvD..95b4029D/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Dietrich, T., <br>Bernuzzi, S., <br>Uvevic, M., &<br>Tichy, W.</td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the stars' rotation</td>\
        <td>Phys. Rev. D, 95, 044045<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.044045>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1611.07367>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017PhRvD..95d4045D/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Chaurasia, S. V., <span id='charausia1etal' onclick='Charausia1etal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of large eccentricities</td>\
        <td>Phys. Rev. D, 98, 104005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.98.104005>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018PhRvD..98j4005C/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Charausia, S. V., <span id='charausia2etal' onclick='Charausia2etal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the spin orientation</td>\
        <td>Phys. Rev. D, 102, 024087<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.102.024087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2003.11901>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.102b4087C/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Dong, W. &<br>Melatos, A.<\td>\
        <td>Gravitational waves from \\(r\\)-mode oscillations of stochastically accreting neutron stars</td>\
        <td>MNRAS, 537, 650\
        <a> context=citet href=https://www.doi.org/10.1093/mnras/staf033>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025MNRAS.537..650D/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Dumin, Y. V. &<br>Somov, B. V.</td>\
        <td>Unipolar solar flares as a manifestation of 'topological' magnetic reconnection</td>\
        <td>MNRAS Lett., 528, L15<br>\
        <a context=citet href=https://doi.org/10.1093/mnrasl/slad162>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.16417>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528L..15D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Eggenberger, P., <br>Moyano, F. D., &<br>den Hartogh, J. W.</td>\
        <td>Rotation in stellar interiors: General formulation and an asteroseismic-calibrated transport by the Tayler instability</td>\
        <td>A&A, 664, L16<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243781>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.17396>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664L..16E/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Etienne, Z. B., <span id='etienneetal' onclick='Etienneetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>IllinoisGRMHD: an open-source, user-friendly GRMHD code for dynamical spacetimes</td>\
        <td>CQGr, 32, 175009<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/32/17/175009>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1501.07276>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015CQGra..32q5009E/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Fabj, G. & Samsing, J.</td>\
        <td>Eccentric mergers in AGN discs: influence of the supermassive black hole on three-body interactions</td>\
        <td>MNRAS, 535, 3630<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae2499>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16948>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.535.3630F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Fasano, D., <span id='fasanoetal' onclick='Fasanoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Planet-driven spirals in protoplanetary discs: <br>Limitations of the semi-analytical theory for observations</td>\
        <td>A&A, 687. A223<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202450087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2405.15611>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...687A.223F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Fathi, M. &<br>Övgün, A.</td>\
        <td>Black hole with global monopole charge in self-interacting Kalb-Ramond field</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.09899>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250109899F/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Feng, W.-F., <span id='fengetal' onclick='Fengetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Inferring binary parameters with dual-line gravitational wave detection from tight inspiraling double neutron stars</td>\
        <td>Phys. Rev. D, 109, 043033<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.043033>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.11241>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109d3033F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Finn, L. S. &<br>Chernoff, D. F.</td>\
        <td>Observing binary inspiral in gravitational radiation: One interferometer</td>\
        <td>Phys. Rev. D, 47, 2198<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.47.2198>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9301003>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1993PhRvD..47.2198F/abstract>ADSAbs</a></td>\
        <td>1993</td>\
    </tr>\
    <tr>\
        <td>Flanagan, É. É. &<br>Hughes, S. A.</td>\
        <td>Measuring gravitational waves from binary black hole coalescences.<br>I. Signal to noise for inspiral, merger, and ringdown</td>\
        <td>Phys. Rev. D, 57, 4535<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.4535>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9701039>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.4535F/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Flanagan, É. É. &<br>Hughes, S. A.</td>\
        <td>Measuring gravitational waves from binary black hole coalescences.<br>II. The waves' information and its extraction, with and without templates</td>\
        <td><br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.4566>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9710129>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.4566F/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Flores, C. V., <span id='floresetal' onclick='Floresetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational wave asteroseismology of dark matter hadronic stars</td></a>\
        <td>Phys. Rev. D, 109, 083021<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.109.083021>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.12600>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h3021F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Fynn Diedrichs, R., <br>Tsujikawa, S., &<br>Yagi, K.</td>\
        <td>Tidal Love numbers of neutron stars in Horndeski theories</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.07998>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250107998F/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Gao, Y., <span id='gaoetal' onclick='Gaoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Convective stability analysis of massive neutron stars formed in binary mergers</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.19053>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250119053G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Gamba, R. &<br>Bernuzzi, S.</td>\
        <td>Resonant tides in binary neutron star mergers: Analytical-numerical relativity study</td>\
        <td>Phys. Rev. D, 107, 044014<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.044014>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2207.13106>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107d4014G/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Gavassino, L.</td>\
        <td>Extending Israel-Stewart theory: Causal bulk viscosity at large gradients</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.12543>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250112543G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Constant angular momentum disks</td>\
        <td>Phys. Rev. D, 99, 043002<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.99.043002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1811.11492>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3002G/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Nonconstant angular momentum disks</td>\
        <td>Phys. Rev. D, 104, 103008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.104.103008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2106.15425>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.104j3008G/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Goldreich, P. &<br>Tremaine, S.</td>\
        <td>The excitation of density waves at the Lindblad and corotation resonances by an external potential</td>\
        <td>ApJ, 233, 857<br>\
        <a context=citet href=https://doi.org/10.1086/157448>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1979ApJ...233..857G/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Gossan, S. E., <br> Hall, E. D., &<br>\Nissanke, S. M.</td>\
        <td>Optimizing the third generation of gravitational-wave observatories for galactic astrophysics</td>\
        <td>ApJ, 926, 231<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac4164>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2110.15322>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022ApJ...926..231G/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Guo, X., <span id='guoetal' onclick='Guoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>There is room at the top: Fundamental quantum limits for detecting ultra-high frequency gravitational waves</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.18146>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250118146G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Hamers, A. S. & <br>Tremaine, S.</td>\
        <td>Hot Jupiters driven by high-eccentricity migration in globular clusters</td>\
        <td>AJ, 154, 272<br>\
        <a context=citet href=https://doi.org/10.3847/1538-3881/aa9926>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1710.00006>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017AJ....154..272H/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>He, K.-J., (<span style='font-family:Liu Jian Mao Cao;'>何柯腱</span>)<br>Yang, C.-J., &<br>Zeng, X.-X. (<span style='font-family:Liu Jian Mao Cao;'>曾晓雄</span>)</td>\
        <td>Optical appearance of the Konoplya-Zhidenko rotating non-Kerr black hole surrounded by a thin accretion disk</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.06778>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250106778H/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Heinz, U. &<br>Schenke, B.</td>\
        <td>Hydrodynamic description of the quark-gluon plasma</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.19393>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241219393H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Herdeiro, C. A. R. &<br>Radu, E.</td>\
        <td>Kerr black holes with scalar hair</td>\
        <td>Phys. Rev. Lett., 112, 221101<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevLett.112.221101>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1403.2757>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014PhRvL.112v1101H/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Herrera, L., <br>Di Prisco, A., &<br>Ospino, J.</td>\
        <td>Irreversibility and gravitational radiation: A proof of Bondi's conjecture</td>\
        <td>Phys. Rev. D, 109, 024005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.024005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.05959>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109b4005H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Ho, P.-M., <br>Kawai, <br>Liao, H., &<br>Yokokura, Y.</td>\
        <td>4D Weyl anomaly and diversity of the interior structure of quantum black hole</td>\
        <td>Eur. Phys. Jour. C, 84, 711<br>\
        <a context=citet href=https://doi.org/https://doi.org/10.1140/epjc/s10052-024-13058-0>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2307.08569>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..711H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Hopman, C.</td>\
        <td>Binary dynamics near a massive black hole</td>\
        <td>ApJ, 700, 1933<br>\
        <a context=citet href=https://doi.org/10.1088/0004-637X/700/2/1933>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/0906.0374>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2009ApJ...700.1933H/abstract>ADSAbs</a></td>\
        <td>2009</td>\
    </tr>\
    <tr>\
        <td>Hou, S. (<span style='font-family:Liu Jian Mao Cao;'>侯绍齐</span>), <br>Fan, X.-L. (<span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), <br>Zhu, T. (<span style='font-family:Liu Jian Mao Cao;'>朱涛</span>), &<br>Zhu, Z.-H. (<span style='font-family:Liu Jian Mao Cao;'>朱宗宏</span>)</td>\
        <td>Nontensorial gravitational wave polarizations from the tensorial degrees of freedom: Linearized Lorentz-violating theory of gravity</td>\
        <td>Phys. Rev. D, 109, 084011<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.084011>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.03474>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h4011H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Hu, H. &<br>Freire, P. C. C.</td>\
        <td>Measuring the Lense-Thirring orbital precession and the neutron star moment of inertia with pulsars</td>\
        <td>Universe, 10, 160<br>\
        <a context=citet href=https://doi.org/10.3390/universe10040160>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.18785>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Univ...10..160H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Hu, Y. &<br>Kamada, K.</td>\
        <td>Gravitational waves from metastable cosmic strings in the delayed scaling scenario</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.18380>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250118380H/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Ivanov, P. B. &<br>Zhuralev, V. V.</td>\
        <td>On the evolution of a twisted thin accretion disc in eccentric inclined supermassive binary black holes</td>\
        <td>MNRAS, 528, 337<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.01317>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528..337I/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Islam, T.</td>\
        <td>Straightforward mode hierarchy in eccentric binary black hole mergers and associated waveform model</td>\
        <td><a context=citet href=https://doi.org/10.48550/arXiv.2403.15506>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.15506>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv240315506I/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kaaz, N., <br>Schrøder, S. L., <br>Andrews, J. J., <br>Antoni, A., &<br>Ramirez-Ruiz, E.</td>\
        <td>The hydrodynamic evolution of binary black holes embedded within the vertically stratified disks of active galactic nuclei</td>\
        <td>ApJ, 944, 44<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/aca967>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2103.12088>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944...44K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Karmakar, B. &<br>Djordjevic, M.</td>\
        <td>Radiative energy loss in a dynamically evolving quark-gluon plasma</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.17106>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241217106K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kenzhebayeva, S.,<br>Toktarbay, S.,<br>Tursunov, A., &<br>Kološ, M.</td>\
        <td>Black hole in a combined magnetic field: Ionized accretion disks in the jetlike and looplike configurations</td>\
        <td>Phys. Rev. D, 109, 063005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.063005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16529>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f3005K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Koide, S., <br>Noda, S., &<br>Takahashi, M.</td>\
        <td>One-dimensional linear analysis and numerical simulations of Alfv´en waves in a force-free magnetosphere around a Kerr black hole</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.13314>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250113314K/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Kozai, Y.</td>\
        <td>Secular perturbations of asteroids with high inclination and eccentricity</td>\
        <td>AJ, 67, 591<br>\
        <a context=citet href=https://doi.org/10.1086/108790>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1962AJ.....67..591K/abstract>ADSAbs</a></td>\
        <td>1962</td>\
    </tr>\
    <tr>\
        <td>Kraav, K. Y., <br>Gusakov, M. E., &<br>Kantor, E. M.</td>\
        <td>Instability windows of relativistic \\(r\\)-modes</td>\
        <td>Phys. Rev. D, 109, 043012<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.043012>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.06200>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109d3012K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kumar, D., <br>Malik, T., <br>Mishra, H., &<br>Providência, C.</td>\
        <td>Robust universal relations in neutron star asteroseismology</td>\
        <td>Phys. Rev. D 108, 083008<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.108.083008></a>\
         | <a context=citet href=https://arxiv.org/abs/2306.09277>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.108h3008K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Kumar, H., <br>Kumar, B., <br>Rajaguru, S. P.</td>\
        <td>On the propagation of gravity waves in the lower solar atmosphere in different magnetic configurations</td>\
        <td>Advances in Space Research, 72, 1898<br>\
        <a context=citet href=https://doi.org/10.1016/j.asr.2023.04.054>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.02740>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023AdSpR..72.1898K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Levin, Y. &<br>D'Angelo, C.</td>\
        <td>Hydromagnetic and gravitomagnetic crust-core coupling in a precessing neutron star</td>\
        <td>ApJ, 613, 1157<br>\
        <a context=citet href=https://doi.org/10.1086/423197>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0403014>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004ApJ...613.1157L/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Li, G.-P. (<span style='font-family:Liu Jian Mao Cao;'>李国鹏</span>), <br>Lin, D.-B. (<span style='font-family:Liu Jian Mao Cao;'>林达斌</span>), &<br>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>)</td>\
        <td>Comparing hierarchical black hole mergers in star clusters and active galactic nuclei</td>\
        <td>Phys. Rev. D, 107, 063007<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.063007>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.11150>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107f3007L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Li, H.-B., <br>Shao, L., <br>Xia, C.-J. (<span style='font-family:Liu Jian Mao Cao;'>夏铖君</span>), &<br>Xu, R.-X.  (<span style='font-family:Liu Jian Mao Cao;'>徐仁新</span>)</td>\
        <td>Continuous gravitational waves from thermal mountains on accreting neutron stars: Effect of the nuclear pasta phase</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.11075>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241111075L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Li, J., <br>Dempsey, A., <br>Li, H., <br>Lai, D., &<br>Li, S.</td>\
        <td>Hydrodynamical simulations of black hole binary formation in AGN disks</td>\
        <td>ApJL, 944, L42<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/acb934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.10357>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944L..42L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Li, Z. &<br>Chen, X.</td>\
        <td>Compact objects in close orbits as gravitational wave sources: Formation scenarios and properties</td>\
        <td>Res. Phys., 59, 107568<br>\
        <a context=citet href=https://doi.org/10.1016/j.rinp.2024.107568>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.06358>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ResPh..5907568L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Lian, Y., <br>Tan, X., &<br>Hu, Y.</td>\
        <td>Jupiter's equatorial quasi-quadrennial oscillation forced by internal thermal forcing</td>\
        <td>ApJ, 958, 50<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acfca6>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.13953>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...958...50L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Liang, D., <br>Chen, S., <br>Zhang, C., &<br>Shao, L.</td>\
        <td>Unveiling the existence of nontensorial gravitational-wave polarizations from individual supermassive black hole binaries with pulsar timing arrays</td>\
        <td>Phys. Rev. D, 110, 084040<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.084040>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2404.16680>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110h4040L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Lidov, M. L.</td>\
        <td>The evolution of orbits of artificial satellites of planets under the action of gravitational perturbations of external bodies</td>\
        <td>Planet. Space Sci., 9, 719<br>\
        <a context=citet href=https://doi.org/10.1016/0032-0633(62)90129-0>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1962P&SS....9..719L/abstract>ADSAbs</a></td>\
        <td>1962</td>\
    </tr>\
    <tr>\
        <td>Lim, H., <br>Khanna, G., <br>Apte, A., &<br>Hughes, S. A.</td>\
        <td>Exciting black hole modes via misaligned coalescences.<br>II. The mode content of late-time coalescence waveforms</td>\
        <td>Phys. Rev. D, 100, 084032<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.100.084032>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1901.05902>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD.100h4032L/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Lin, F.-L., <br>Patel, A., <br>Pu, H.-Y.</td>\
        <td>Black hole shadow with soft hairs</td>\
        <td>JHEP, 2022, 117<br>\
        <a context=citet href=https://doi.org/10.1007/JHEP09(2022)117>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2202.13559>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022JHEP...09..117L/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Liska, M. T. P., <span id='liskaetal' onclick='Liskaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Magnetic flux plays an important role during a black hole X-ray binary outburst in radiative two-temperature general relativistic magnetohydrodynamical simulations</td>\
        <td>ApJ, 966, 47<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad344a>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15926>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...966...47L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Lynden-Bell, D. &<br>Kalnajs, A. J.</td>\
        <td>On the generating mechanism of spiral structure</td>\
        <td>MNRAS, 157, 1<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/157.1.1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1972MNRAS.157....1L/abstract>ADSAbs</a></td>\
        <td>1972</td>\
    </tr>\
    <tr>\
        <td>Martel, K. &<br>Poisson, E.</td>\
        <td>Gravitational waves from eccentric compact binaries: Reduction in signal-to-noise ratio due to nonoptimal signal processing</td>\
        <td>Phys. Rev. D, 60, 124008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.60.124008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9907006>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhRvD..60l4008M/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Mehta, A. K., <span id='mehtaetal' onclick='Mehtaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Significant increase in sensitive volume of a gravitational wave search upon including higher harmonics</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.17939>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250117939M/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Mignon-Risse, R., <br>González, M., <br>Commerçon, B., &<br>Rosdahl, J.</td>\
        <td>Collapse of turbulent massive cores with ambipolar diffusion and hybrid radiative transfer.<br>I. Accretion and multiplicity</td>\
        <td>A&A, 652, A69<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202140617>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2105.14543>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021A%26A...652A..69M/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Mignon-Risse, R., <br>González, M., &<br>Commerçon, B.</td>\
        <td>Collapse of turbulent massive cores with ambipolar diffusion and hybrid radiative transfer.<br>II. Outflows</td>\
        <td>A&A, 656, A85<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202141648>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2109.11241>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021A%26A...656A..85M/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Moriyama, K., <span id='moriyamaetal' onclick='Moriyamaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Black hole accretion and radiation variability in GRMHD simulations with Rezzolla-Zhidenko spacetime</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.08720>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250108720M/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Nasim, S. S., <span id='nasimetal' onclick='Nasimetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Aligning retrograde nuclear cluster orbits with an active galactic nucleus accretion disc</td>\
        <td>MNRAS, 522, 5393<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1295>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2207.09540>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.5393N/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Nättilä, J.</td>\
        <td>Runko: Modern multiphysics toolbox for plasma simulations</td>\
        <td>A&A, 664, A68<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201937402>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1906.06306>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..68N/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Ng, H. H.-Y., <br>Cheong, P. C.-K., <br>Lin, L.-M. &<br>L., T. G. F.</td>\
        <td>Gravitational-wave asteroseismology with \\(f\\)-modes from neutron star binaries at the merger phase</td>\
        <td>ApJ, 915, 108<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac0141>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2012.08263>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...915..108N/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Nitta, S.-Y.</td>\
        <td>An application of the Kerr black hole fly-wheel model to statistical properties of QSOs/AGNs</td>\
        <td>MNRAS, 308, 995<br>\
        <a context=citet href=https://doi.org/10.1046/j.1365-8711.1999.02762.x>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/9905180>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999MNRAS.308..995N/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Nieuwenhuizen, T. M.</td>\
        <td>The interior of hairy black holes in standard model physics</td>\
        <td><a context=citet href=https://doi.org/10.48550/arXiv.2108.01422>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2108.01422>ArXiv</a>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>O'Neill, D., <br>D'Orazio, D. J., <br>Samsing, J., &<br>Pessah, M. E.</td>\
        <td>Gaseous dynamical friction on elliptical Keplerian orbits</td>\
        <td>ApJ, 974, 216<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad7250>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.16166>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...974..216O/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Ossokine, S., <span id='ossokineetal' onclick='Ossokineetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Multipolar effective-one-body waveforms for precessing binary black holes: Construction and validation</td>\
        <td>Phys. Rev. D, 102, 044055<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.102.044055>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2004.09442>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.102d4055O/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I.,<br>Blackman, E. G., &<br>Boldyrev, S. A.</td>\
        <td>Extending the Shakura-Sunyaev approach to a strongly magnetized accretion disc model</td>\
        <td>A&A, 407, 403<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361:20030868>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0208400>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2003A%26A...407..403P/abstract>ADSAbs</a></td>\
        <td>2003</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I. & <br>Colgate, S. A.</td>\
        <td>A magnetic \\(\alpha-\omega\\) dynamo in AGN disks. <br>I. The hydrodynamics of star-disk collisions and Keplerian flow</td>\
        <td>ApJ, 658, 114<br>\
        <a context=citet href=https://doi.org/10.1086/510734>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611139>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..114P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I., <br>Colgate, S. A., &<br>Finn, J. M.</td>\
        <td>A magnetic \\(\alpha-\omega\\) dynamo in AGN disks. <br>II. Magnetic field generation, theories, and simulations</td>\
        <td>ApJ, 658, 129<br>\
        <a context=citet href=https://doi.org/10.1086/510735>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611188>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..129P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Passamonti, A. &<br>Lander, S. K.</td>\
        <td>Quasi-periodic oscillations in superfluid magnetars</td>\
        <td>MNRAS, 438, 156<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stw1880>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1606.02132>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2016MNRAS.463.1173P/abstract>ADSAbs</a></td>\
        <td>2016</td>\
    </tr>\
    <tr>\
        <td>Passamonti, A. &<br>Lander, S. K.</td>\
        <td>Quasi-periodic oscillations in superfluid, relativistic magnetars with pasta phases</td>\
        <td>MNRAS, 463, 1173<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stt2134>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1307.3210>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014MNRAS.438..156P/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Périgois, C.</td>\
        <td>PRINCESS: Prediction of compact binaries observations with gravitational waves</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16127>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116127P/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Peters, P. C. &<br>Mathews, J.</td>\
        <td>Gravitational radiation from point masses in a Keplerian orbit</td>\
        <td>Phys. Rev., 131, 435<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRev.131.435>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1963PhRv..131..435P/abstract>ADSAbs</a></td>\
        <td>1963</td>\
    </tr>\
    <tr>\
        <td>Petrovich, C., <br>Muñoz, D., <br>Kratter, K. M., <br>Malhotra, R.</td>\
        <td>A disk-driven resonance as the origin of high inclinations of close-in planets</td>\
        <td>ApJL, 902, L5<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/abb952>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2008.08587>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020ApJ...902L...5P/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Pi, C.-M. (<span style='font-family:Liu Jian Mao Cao;'>皮春梅</span>) &<br>Yang, S.-H. (<span style='font-family:Liu Jian Mao Cao;'>杨书华</span>)</td>\
        <td>Non-Newtonian gravity in strange stars and constraints from the observations of compact stars</td>\
        <td>New Astronomy, 90, 101670<br>\
        <a context=citet href=https://doi.org/10.1016/j.newast.2021.101670>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022NewA...9001670P/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Pjanka, P., <br>Demidem, C., &<br>Veledina, A.</td>\
        <td>Shock corrugation to the rescue of the internal shock model in microquasars: The single-scale magnetohydrodynamic view</td>\
        <td>ApJ, 947, 57<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acbf35>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2301.05686>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...57P/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Poisson, E. &<br>Clifford, M.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Parameter estimation using second-post-Newtonian waveforms</td>\
        <td>Phys. Rev. D, 52, 848<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.52.848>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9502040>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1995PhRvD..52..848P/abstract>ADSAbs</a></td>\
        <td>1995</td>\
    </tr>\
    <tr>\
        <td>Droz, S. & <br>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Second post-Newtonian waveforms as search templates</td>\
        <td>Phys. Rev. D, 56, 4449<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.56.4449>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9705034>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1997PhRvD..56.4449D/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: The quadrupole-moment term</td>\
        <td>Phys. Rev. D, 57, 5287<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.5287>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9709032>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.5287P/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Accuracy of the post-Newtonian waveforms</td>\
        <td><a context=citet href=https://arxiv.org/abs/gr-qc/9801038>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998gr.qc.....1038P/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Droz, S., <br>Knapp, D. J., <br>Poisson, E., <br>Owen, B. J.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Validity of the stationary-phase approximation to the Fourier transform</td>\
        <td>Phys. Rev. D, 59, 124016<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.59.124016>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9901076>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhRvD..59l4016D/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Porth, O., <span id='porthetal' onclick='Porthetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>The Event Horizon General Relativistic Magnetohydrodynamic Code Comparison Project</td>\
        <td>ApJS, 243, 26<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4365/ab29fd>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1904.04923>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019ApJS..243...26P/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Pourhassan, B., <br>Farahani, H., <br>Kazemian, F., <br>Sakallı, İ., <br>Upadhyay, S., &<br>Singh, D. V.</td>\
        <td>Non-perturbative correction on the black hole geometry</td>\
        <td>PDU, 44, 101444<br>\
        <a context=citet href=https://doi.org/10.1016/j.dark.2024.101444>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.07972>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PDU....4401444P/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Pretel, J. M. Z., <br>Dutra, M., &<br>Duarte, S. B.</td>\
        <td>Normal oscillation modes and radial stability of neutron stars with a dark-energy core from the Chaplygin gas</td>\
        <td>Phys. Rev. D, 109, 023524<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.023524>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.01961>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109b3524P/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Pretel, J. M. Z., <br>Jorás, S. E., <br>Ribamar, R. R. R., &<br>Arbañil, J. D. V.</td>\
        <td>Neutron stars in \\(f(R,T)\\) gravity with conserved energy-momentum tensor: Hydrostatic equilibroum and asteroseismology</td>\
        <td>JCAP 2021, 055<br>\
        <a context=citet href=https://www.doi.org/10.1088/1475-7516/2021/08/055>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Price-Whelan, A. M.</td>\
        <td>Gala: A Python package for galactic dynamics</td>\
        <td>The Journal of Open Source Software, 2, 388<br>\
        <a context=citet href=https://doi.org/10.21105/joss.00388>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2017JOSS....2..388P/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Radice, D. &<br>Hawke, I.</td>\
        <td>Turbulence modelling in neutron star merger simulations</td>\
        <td>LRCA, 10, 1<br>\
        <a context=citet href=https://doi.org/10.1007/s41115-023-00019-9>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.03224>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024LRCA...10....1R/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Rafel, J., <br>Tenorio, R., &<br>Sintes, A. M.</td>\
        <td>Assessing the similarity of continuous gravitational-wave signals to narrow instrumental artifacts</td>\
        <td>Universe, 10, 121<br>\
        <a context=citet href=https://doi.org/10.3390/universe10030121>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.03027>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Univ...10..121J/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Rein, H. &<br>Liu, S.-F.</td>\
        <td>REBOUND: an open-source multi-purpose \\(N\\)-body code for collisional dynamics</td>\
        <td>A&A, 537, A128<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201118085>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1110.4876>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2012A%26A...537A.128R/abstract>ADSAbs</a></td>\
        <td>2012</td>\
    </tr>\
    <tr>\
        <td>Rezzolla, L., <br>Most, E. R., &<br>Weih, L. R.</td>\
        <td>Using gravitational-wave observations and quasi-universal relations to constrain the maximum mass of neutron stars</td>\
        <td>ApJL, 852, L25<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/aaa401>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1711.00314>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018ApJ...852L..25R/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Rivieccio, G., <br>Nadal-Matosas, A., <br>Rios, A., &<br>Ruiz, M.</td>\
        <td>The thermal index of neutron-star matter in the virial approximation</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16795>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116795R/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Roisin, A., <br>Doukhanin, N., <br>Teyssandier, J., & <br>Libert, A.-S.</td>\
        <td>Resonance capture and long-term evolution of planets in binary star mergers</td>\
        <td>A&A, 664, A87<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243344>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2206.08806>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..87R/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Rosato, R. F., <br>Biswas, S., <br>Chakraborty, S., &<br>Pani, P.</td>\
        <td>Greybody factors, reflectionless scattering modes, and echoes of ultracompact horizonless objects</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16433>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116433R/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Roulet, J. &<br>Venumadhav, T.</td>\
        <td>Inferring Binary Properties from Gravitational-Wave Signals</td>\
        <td>ARNPS, 74, 207<br>\
        <a context=citet href=https://doi.org/10.1146/annurev-nucl-121423-100725>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.11439>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ARNPS..74..207R/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binary formation in AGN discs: from isolation to merger</td>\
        <td>MNRAS, 524, 2770<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1926>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2212.06133>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.524.2770R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Whitehead, H., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binaries in AGN accretion discs.<br>II. Gas effects on black hole satellite scatterings</td>\
        <td>MNRAS, 527, 10448<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3641>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.14433>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.52710448R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Ruan, W.,<br>Yan, L., &<br>Keppens, R.</td>\
        <td>Magnetohydrodynamic turbulence formation in solar flares: 3D simulation and synthetic observations</td>\
        <td>ApJ, 947, 67<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac9b4e>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2210.09856>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...67R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Saavedra, A., <span id='saavedraaetal' onclick='Saavedraaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Neutron stars in 4D Einstein-Gauss-Bonnet gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.15459>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241215459S/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Sagun, V., <br>Panotopoulos, G., &<br>Lopes, I.</td>\
        <td>Asteroseismology: Radial oscillations of neutron stars with realistic equation of state</td>\
        <td>Phys. Rev. D, 101, 063025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.101.063025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2002.12209>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.101f3025S/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Samsing, J., <span id='samsingetal' onclick='Samsingetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational wave phase shifts in eccentric black hole mergers as a probe of dynamical formation environments</td>\
        <td><a context=citet href=https://arxiv.org/abs/2403.05625>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv240305625S/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Sathyaprakash, B. S. &<br>Dhurandhar, S. V.</td>\
        <td>Choice of filters for the detection of gravitational waves from coalescing binaries</td>\
        <td>Phys. Rev. D, 44, 3819<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.44.3819>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1991PhRvD..44.3819S/abstract>ADSAbs</a></td>\
        <td>1991</td>\
    </tr>\
    <tr>\
        <td>Schoonenberg, D., <br>Ormel, C. E., & <br>Krijt, S.</td>\
        <td>A Lagrangian model for dust evolution in protoplanetary disks: Formation of wet and dry planetesimals at different stellar masses</td>\
        <td>A&A, 620, A134<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201834047>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018A%26A...620A.134S/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Schutz, B. F.</td>\
        <td>Asteroseismology of neutron stars and black holes</td>\
        <td>Jour. Phys.: Conf. Ser., 118, 012005<br>\
        <a context=citet href=https://doi.org/10.1088/1742-6596/118/1/012005>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2008JPhCS.118a2005S/abstract>ADSAbs</a></td>\
        <td>2008</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>I. A simplified model</td>\
        <td>ApJ, 910, 13<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abda46>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2010.15617>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...910...13S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>II. Toward a self-consistent model</td>\
        <td>ApJ, 9154, 100<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ace68e>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.00951>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...954..100S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Sekhmani, Y., <span id='sekhamietal' onclick='Sekhamietal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Black holes immersed in polytropic scalar field gas</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.10874https://ui.adsabs.harvard.edu/abs/2025arXiv250110874S/abstract>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250110874S/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Simone, L. E., <br>Leonard, S. W., <br>Poisson, E., &<br>Will, C. M.</td>\
        <td>Gravitational waves from binary systems in circular orbits: Does the post-Newtonian expansion converge?</td>\
        <td>CQGr, 14, 237<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/14/1/021>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9610058>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1997CQGra..14..237S/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Leonard, S. W. &<br>Poisson, E.</td>\
        <td>Gravitational waves from binary systems in circular orbits: Convergence of a partially bare multipole expansion</td>\
        <td>CQGr, 15, 2075<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/15/8/002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9708037>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998CQGra..15.2075L/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Smallwood, J. L., <span id='smallwoodetal' onclick='Smallwoodetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>GW Ori: Circumptriple rings and planets</td>\
        <td>MNRAS, 508, 392<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stab2624>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021MNRAS.508..392S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Sotani, Hajime</td>\
        <td>Shear and interface modes in neutron stars with pasta structures</td>\
        <td>Phys. Rev. D, 107, 123025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.123025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2306.07531>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107l3025S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Sotani, H. &<br>Dohi, A.</td>\
        <td>Gravitational wave asteroseismology on cooling neutron stars</td>\
        <td>Phys. Rev. D 105, 023007<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.105.023007</a>\
         | <a context=citet href=https://arxiv.org/abs/2201.00648>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022PhRvD.105b3007S/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Staelen, C. &<br>Huré, J.-M.</td>\
        <td>Approaching the structure of rotating bodies from dimension reduction</td>\
        <td>A&A, 684, A59<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202348590>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.08386>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2024A%26A...684A..59S/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Su, K.-Y. (<span style='font-family:Yu Youren;'>蘇恭毅</span>)</td>\
        <td>Stellar feedback, AGN feedback, and fluid microphysics in galaxy evolution</td>\
        <td>PhD Thesis (CalTech)<br>\
        <a context=citet href=https://doi.org/10.7907/RQG9-NT50>DOI</a>\
         | <a context=citet href=https://resolver.caltech.edu/CaltechTHESIS:05142019-161824896>CalTech repo</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhDT.......163S/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Suleimanov, V. F., <br>Poutanen, J., <br>Doroshenko, V., &<br>Werner, K.</td>\
        <td>Expected polarization properties of nonmagnetized CCOs</td>\
        <td>A&A, 673, A15<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202346092>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2303.01382>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...673A..15S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Susková, P., <br>Zajaček, M., <br>Witzany, V., &<br>Karas, V.</td>\
        <td>Stellar transits across a magnetized accretion torus as a mechanism for plasmoid ejection</td>\
        <td>ApJ, 917, 43<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac05c6>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2102.08135>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...917...43S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Tamar, A.,<br>Hudson, B., &<br>Palumbo, D. C. M.</td>\
        <td>Effects of Earth's oblateness on black hole imaging through Earth-space and space-space very long baseline interferometry</td>\
        <td>ApJ, 967, 90<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad31a7>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.08606>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2024ApJ...967...90T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Tamayo, D.,<br>Rein, H.,<br>Shi, P., &<br>Hernandez, D. M.</td>\
        <td>REBOUNDx: a library for adding conservative and dissipative forces to otherwise symplectic \\(N\\)-body integrations</td>\
        <td>MNRAS, 491, 2885<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stz2870>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1908.05634>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2020MNRAS.491.2885T/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Tanaka, H., <br>Takeuchi, T., & <br>Ward, W. R.</td>\
        <td>Three-dimensional interaction between a planet and an isothermal gaseous disk. <br>I. Corotation and Lindblad torques and planet migration</td>\
        <td>ApJ, 565, 1257<br>\
        <a context=citet href=https://doi.org/10.1086/324713>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2002ApJ...565.1257T/abstract>ADSAbs</a></td>\
        <td>2002</td>\
    </tr>\
    <tr>\
        <td>Tanaka, H., & <br>Ward, W. R.</td>\
        <td>Three-dimensional interaction between a planet and an isothermal gaseous disk. <br>II. Eccentricity waves and bending waves</td>\
        <td>ApJ, 602, 388<br>\
        <a context=citet href=https://doi.org/10.1086/380992>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004ApJ...602..388T/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Trani, A. A., <br>Quaini, S., &<br>Colpi, M.</td>\
        <td>Three-body encounters in black hole discs around a supermassive black hole. The disc velocity dispersion and the Keplerian tidal field determine the eccentricity and spin-orbit alignment of gravitational wave mergers</td>\
        <td>A&A, 683, A135<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347920>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2312.13281>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...683A.135T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Volkov, M. S. &<br>Galt'sov, D. V.</td>\
        <td>Gravitating non-Abelian solitons and black holes with Yang-Mills fields</td>\
        <td>Phys. Rep., 319, 1<br>\
        <a context=citet href=https://doi.org/10.1016/S0370-1573(99)00010-1>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/hep-th/9810070>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhR...319....1V/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>von Zeipel, H.</td>\
        <td>Sur l'application des séries de M. Lindstedt à l'étude du mouvement des comètes périodiques</td>\
        <td>Astronomische Nachrichten, 183, 345<br>\
        <a context=citet href=https://doi.org/10.1002/asna.19091832202>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1910AN....183..345V/abstract>ADSAbs</a></td>\
        <td>1910</td>\
    </tr>\
    <tr>\
        <td>Vretinaris, S., <br>Stergioulas, N., &<br>Bauswein, A.</td>\
        <td>Empirical relations for gravitational-wave asteroseismology of binary neutron star mergers</td>\
        <td>Phys. Rev. D 101, 084039<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.101.084039</a>\
         | <a context=citet href=https://arxiv.org/abs/1910.10856>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.101h4039V/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Wagoner, R. V. &<br>Will, C. M.</td>\
        <td>Post-Newtonian gravitational radiation from orbiting point masses</td>\
        <td>ApJ, 210, 764<br>\
        <a context=citet href=https://doi.org/10.1086/154886>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1976ApJ...210..764W/abstract>ADSAbs</a></td>\
        <td>1976</td>\
    </tr>\
    <tr>\
        <td>Wagoner, R. V. &<br>Will, C. M.</td>\
        <td>Erratum: Post-Newtonian gravitational radiation from orbiting point masses</td>\
        <td>ApJ, 215, 984<br>\
        <a context=citet href=https://doi.org/10.1086/155435>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1977ApJ...215..984W/abstract>ADSAbs</a></td>\
        <td>1977</td>\
    </tr>\
    <tr>\
        <td>Wang, H.-S. (<span style='font-family:Yu Youren;'>王皓陞</span>), <br>Pan, K.-C. (<span style='font-family:Yu Youren;'>潘國全</span>)</td>\
        <td>The influence of stellar rotation in binary systems on core-collapse supernova progenitors and multimessenger signals</td>\
        <td>ApJ, 964, 23<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad2076>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.08985>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...964...23W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wang, K., <br>Feng, C.-J. (<span style='font-family:Liu Jian Mao Cao;'>冯朝君</span>), &<br>Wang, T.</td>\
        <td>Image of Kerr–de Sitter black holes illuminated by equatorial thin accretion disks</td>\
        <td>Eur. Phys. Jour. C, 84, 457<br>\
        <a context=citet href=https://doi.org/10.1140/epjc/s10052-024-12825-3>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.16944>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..457W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wang, Y., <br>Bing, Z., <br>Zhu, Z.</td>\
        <td>Anisotropic energy injection from magnetar central engines in short GRBs</td>\
        <td>MNRAS, 528, 3705<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae136>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15141>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.3705W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wang, Z.-L. &<br>Battista, E.</td>\
        <td>Dynamical features and shadows of quantum Schwarzschild black hole in effective field theories of gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.14516>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250114516W/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Ward, W. R.</td>\
        <td>Protoplanet migration by nebula tides</td>\
        <td>Icarus, 126, 261<br>\
        <a context=citet href=https://doi.org/10.1006/icar.1996.5647>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2000MNRAS.316..540C/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>Quadrupole-squared terms</td>\
        <td>Phys. Rev. D, 103, 063003<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.103.063003>DOI</a>\
<a context=citet href=https://arxiv.org/abs/2011.13286>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.103f3003W/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Conway, L. &<br>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>II. Second-order and dotriacontapole-order effects</td>\
        <td>Phys. Rev. D, 110, 083022<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.083022>DOI</a>\
<a context=citet href=https://arxiv.org/abs/2408.04411>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110h3022C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Conway, L. &<br>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>III. Astrophysical implications of second-order and dotriacontapole terms</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.11187>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250111187C/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Wilson, O. H. &<br>Ho, W. C. G.</td>\
        <td>Gravitational waves from glitch-induced \\(f\\)-mode oscillations in quark and neutron stars</td>\
        <td>Phys. Rev. D, 109, 083006<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.083006>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.09489>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h3006W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wojnar, A., <br>Kalita, S., &<br>Sarmah, L.</td>\
        <td>Effects of modified gravity on microscopic properties and cooling timescale of white dwarfs</td>\
        <td>Phys. Lett. B, 850, 138494<br>\
        <a context=citet href=https://doi.org/10.1016/j.physletb.2024.138494>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.14775>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhLB..85038494W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wu, Y. & <br>Murray, N.</td>\
        <td>Planet migration and binary companions: The case of HD 80606b</td>\
        <td>ApJ, 589, 605<br>\
        <a context=citet href=https://doi.org/10.1086/374598>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2003ApJ...589..605W/abstract>ADSAbs</a></td>\
        <td>2003</td>\
    </tr>\
    <tr>\
        <td>Xu, K. (<span style='font-family:Liu Jian Mao Cao;'>许坤</span>), <br>Yang, H.-R., <br>Mao, Y.-H., <br>Xu, X.-T., <br>Li, X.-D., &<br>Liu, J.</td>\
        <td>Back to the starting point: On the simulation of the initial magnetic fields and spin periods of nonaccreting pulsars</td>\
        <td>ApJ, 947, 76<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acc8ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2304.03530>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...76X/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Yu, C., <br>Zhang, X-, <br>Kazempour, S., &<br>Sun, S.</td>\
        <td>Superradiance in acoustic black hole</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.20890>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241220890Y/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>), <br>Fan, X.-L. <span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), &<br>Lü, H.-J.</td>\
        <td>Constraining the ellipticity and frequency of binary neutron star remnant via its gravitational-wave and electromagnetic radiations</td>\
        <td>MNRAS, 522, 4294<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1266>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01364>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4294Y/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Zalamea, I., <br>Menou, K., &<br>Beloborodov, A. M.</td>\
        <td>White dwarfs stripped by massive black holes: Sources of coincident gravitational and electromagnetic radiation</td>\
        <td><br>\
        <a context=citet href=https://doi.org/10.1111/j.1745-3933.2010.00930.x>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1005.3987>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2010MNRAS.409L..25Z/abstract>ADSAbs</a></td>\
        <td>2010</td>\
    </tr>\
    <tr>\
        <td>Zheng, X. (<span style='font-family:Liu Jian Mao Cao;'>郑晓晨</span>), <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>), &<br>Mao, S. (<span style='font-family:Liu Jian Mao Cao;'>毛淑德</span>)</td>\
        <td>The influence of the secular perturbation of an intermediate-mass companion.<br>I. Eccentricity excitation of disk stars at the Galactic Center</td>\
        <td>ApJ, 905, 169<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abc8e5>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2011.04653>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020ApJ...905..169Z/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Zheng, X. (<span style='font-family:Liu Jian Mao Cao;'>郑晓晨</span>), <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>), &<br>Mao, S. (<span style='font-family:Liu Jian Mao Cao;'>毛淑德</span>)</td>\
        <td>The influence of the secular perturbation of an intermediate-mass companion.<br>II. Ejection of hypervelocity stars from the Galactic Center</td>\
        <td>ApJ, 914, 33<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abf5de>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2104.02989>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...914...33Z/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Zheng, Z.-Y. (<span style='font-family:Liu Jian Mao Cao;'>郑子岳</span>), <span id='zhengetal' onclick='Zhengetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>\\(f\\)-mode oscillations of hybrid stars with pasta construction</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.15697>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241115697Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zhu, W. (<span style='font-family:Liu Jian Mao Cao;'>祝伟</span>), <br>Huang, C. X. (<span style='font-family:Liu Jian Mao Cao;'>黄煦</span>), <br>Zhou, G., & <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>)</td>\
        <td>Constraining the oblateness of Kepler planets</td>\
        <td>ApJ, 796, 67<br>\
        <a context=citet href=https://doi.org/10.1088/0004-637X/796/1/67>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014ApJ...796...67Z/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Zier, O., <br>Springel, V., &<br>Mayer, A. C.</td>\
        <td>Non-ideal magnetohydrodynamics on a moving mesh.<br>I. Ohmic and ambipolar diffusion</td>\
        <td>MNRAS, 527, 1563<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3200>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2307.11814>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.527.1563Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zier, O., <br>Springel, V., &<br>Mayer, A. C.</td>\
        <td>Non-ideal magnetohydrodynamics on a moving mesh.<br>II. Hall effect</td>\
        <td>MNRAS, 527, 8355<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3769>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15907>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.527.8355Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zwick, L., <span id='zwicketal' onclick='Zwicketal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Novel category of environmental effects on gravitational waves from binaries perturbed by periodic forces</td>\
        <td>Phys. Rev. D, 110, 103005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.103005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2405.05698>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110j3005Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
</table>\
";

var mech="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Baruteau, C., <br>Fromang, S., <br>Nelson, R. P., &<br>Masset, F.</td>\
        <td>Corotation torques experienced by planets embedded in weakly magnetized turbulent discs</td>\
        <td>A&A, 533, A84<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201117227>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1107.2774>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2011A%26A...533A..84B/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Bellovary, J. M., Mac Low, M.-M., <br>McKernan, B., &<br>Ford, K. E. S.<br></td>\
        <td>Migration traps in disks around supermassive black holes</td>\
        <td>ApJL, 819, L17<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8205/819/2/L17>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1511.00005>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2016ApJ...819L..17B/abstract>ADSAbs</a></td>\
        <td>2016</td>\
    </tr>\
    <tr>\
        <td>Bovy, J.</td>\
        <td>Galpy: A Python library for galactic dynamics</td>\
        <td>ApJS, 216, 29<br>\
        <a context=citet href=https://doi.org/10.1088/0067-0049/216/2/29>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1412.3451>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2015ApJS..216...29B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Chirikov, B.</td>\
        <td>A universal instability of many-dimensional oscillator systems</td>\
        <td>Phys. Rep., 52, 263<br>\
        <a context=citet href=https://doi.org/10.1016/0370-1573(79)90023-1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1979PhR....52..263C/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Conway, J. T.</td>\
        <td>Analytical solutions for the Newtonian gravitational field induced by matter within axisymmetric boundaries</td>\
        <td>MNRAS, 316, 540<br>\
        <a context=citet href=https://doi.org/10.1046/j.1365-8711.2000.03523.x>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2000MNRAS.316..540C/abstract>ADSAbs</a></td>\
        <td>2000</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B.</td>\
        <td>Three-dimensional initial data for the collision of two black holes. II. Quasicircular orbits for equal-mass black holes</td>\
        <td>Phys. Rev. D, 50, 5025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.50.5025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9404043>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1994Phys. Rev. D..50.5025C/abstract>ADSAbs</a></td>\
        <td>1994</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B., <span id='cooketal' onclick='Cooketal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Three-dimensional initial data for the collision of two black holes</td>\
        <td>Phys. Rev. D, 47, 1471<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.47.1471>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1993Phys. Rev. D..47.1471C/abstract>ADSAbs</a></td>\
        <td>1993</td>\
    </tr>\
    <tr>\
        <td>Gamba, R. &<br>Bernuzzi, S.</td>\
        <td>Resonant tides in binary neutron star mergers: Analytical-numerical relativity study</td>\
        <td>Phys. Rev. D, 107, 044014<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.044014>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2207.13106>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107d4014G/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Goldreich, P. &<br>Tremaine, S.</td>\
        <td>The excitation of density waves at the Lindblad and corotation resonances by an external potential</td>\
        <td>ApJ, 233, 857<br>\
        <a context=citet href=https://doi.org/10.1086/157448>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1979ApJ...233..857G/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Hopman, C.</td>\
        <td>Binary dynamics near a massive black hole</td>\
        <td>ApJ, 700, 1933<br>\
        <a context=citet href=https://doi.org/10.1088/0004-637X/700/2/1933>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/0906.0374>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2009ApJ...700.1933H/abstract>ADSAbs</a></td>\
        <td>2009</td>\
    </tr>\
    <tr>\
        <td>Kozai, Y.</td>\
        <td>Secular perturbations of asteroids with high inclination and eccentricity</td>\
        <td>AJ, 67, 591<br>\
        <a context=citet href=https://doi.org/10.1086/108790>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1962AJ.....67..591K/abstract>ADSAbs</a></td>\
        <td>1962</td>\
    </tr>\
    <tr>\
        <td>Lidov, M. L.</td>\
        <td>The evolution of orbits of artificial satellites of planets under the action of gravitational perturbations of external bodies</td>\
        <td>Planet. Space Sci., 9, 719<br>\
        <a context=citet href=https://doi.org/10.1016/0032-0633(62)90129-0>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1962P&SS....9..719L/abstract>ADSAbs</a></td>\
        <td>1962</td>\
    </tr>\
    <tr>\
        <td>Lynden-Bell, D. &<br>Kalnajs, A. J.</td>\
        <td>On the generating mechanism of spiral structure</td>\
        <td>MNRAS, 157, 1<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/157.1.1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1972MNRAS.157....1L/abstract>ADSAbs</a></td>\
        <td>1972</td>\
    </tr>\
    <tr>\
        <td>Price-Whelan, A. M.</td>\
        <td>Gala: A Python package for galactic dynamics</td>\
        <td>The Journal of Open Source Software, 2, 388<br>\
        <a context=citet href=https://doi.org/10.21105/joss.00388>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2017JOSS....2..388P/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Rein, H. &<br>Liu, S.-F.</td>\
        <td>REBOUND: an open-source multi-purpose \\(N\\)-body code for collisional dynamics</td>\
        <td>A&A, 537, A128<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201118085>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1110.4876>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2012A%26A...537A.128R/abstract>ADSAbs</a></td>\
        <td>2012</td>\
    </tr>\
    <tr>\
        <td>Roisin, A., <br>Doukhanin, N., <br>Teyssandier, J., & <br>Libert, A.-S.</td>\
        <td>Resonance capture and long-term evolution of planets in binary star mergers</td>\
        <td>A&A, 664, A87<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243344>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2206.08806>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..87R/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binary formation in AGN discs: from isolation to merger</td>\
        <td>MNRAS, 524, 2770<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1926>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2212.06133>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.524.2770R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Whitehead, H., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binaries in AGN accretion discs.<br>II. Gas effects on black hole satellite scatterings</td>\
        <td>MNRAS, 527, 10448<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3641>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.14433>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.52710448R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Staelen, C. &<br>Huré, J.-M.</td>\
        <td>Approaching the structure of rotating bodies from dimension reduction</td>\
        <td>A&A, 684, A59<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202348590>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.08386>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2024A%26A...684A..59S/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Tamar, A.,<br>Hudson, B., &<br>Palumbo, D. C. M.</td>\
        <td>Effects of Earth's oblateness on black hole imaging through Earth-space and space-space very long baseline interferometry</td>\
        <td>ApJ, 967, 90<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad31a7>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.08606>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2024ApJ...967...90T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Tamayo, D.,<br>Rein, H.,<br>Shi, P., &<br>Hernandez, D. M.</td>\
        <td>REBOUNDx: a library for adding conservative and dissipative forces to otherwise symplectic \\(N\\)-body integrations</td>\
        <td>MNRAS, 491, 2885<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stz2870>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1908.05634>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2020MNRAS.491.2885T/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>von Zeipel, H.</td>\
        <td>Sur l'application des séries de M. Lindstedt à l'étude du mouvement des comètes périodiques</td>\
        <td>Astronomische Nachrichten, 183, 345<br>\
        <a context=citet href=https://doi.org/10.1002/asna.19091832202>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1910AN....183..345V/abstract>ADSAbs</a></td>\
        <td>1910</td>\
    </tr>\
    <tr>\
        <td>Ward, W. R.</td>\
        <td>Protoplanet migration by nebula tides</td>\
        <td>Icarus, 126, 261<br>\
        <a context=citet href=https://doi.org/10.1006/icar.1996.5647>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2000MNRAS.316..540C/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>Quadrupole-squared terms</td>\
        <td>Phys. Rev. D, 103, 063003<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.103.063003>DOI</a>\
<a context=citet href=https://arxiv.org/abs/2011.13286>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.103f3003W/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Conway, L. &<br>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>II. Second-order and dotriacontapole-order effects</td>\
        <td>Phys. Rev. D, 110, 083022<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.083022>DOI</a>\
<a context=citet href=https://arxiv.org/abs/2408.04411>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110h3022C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Conway, L. &<br>Will, C. M.</td>\
        <td>Higher-order effects in the dynamics of Hierarchical triple systems:<br>III. Astrophysical implications of second-order and dotriacontapole terms</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.11187>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250111187C/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>), <br>Fan, X.-L. <span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), &<br>Lü, H.-J.</td>\
        <td>Constraining the ellipticity and frequency of binary neutron star remnant via its gravitational-wave and electromagnetic radiations</td>\
        <td>MNRAS, 522, 4294<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1266>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01364>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4294Y/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
</table>\
";

var planets="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Acuña, L.,<br>Deleuil, M., &<br>Mousis, O.</td>\
        <td>Interior-atmosphere modelling to assess the observability of rocky planets with JWST</td>\
        <td>A&A, 677, A14<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202245736>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01250>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...677A..14A/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Baruteau, C., <br>Fromang, S., <br>Nelson, R. P., &<br>Masset, F.</td>\
        <td>Corotation torques experienced by planets embedded in weakly magnetized turbulent discs</td>\
        <td>A&A, 533, A84<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201117227>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1107.2774>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2011A%26A...533A..84B/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Belenkaya, E. S.,<br>Khodachenko, M. L., &<br>Alexeev, I. I.</td>\
        <td>Alfvén Radius: A Key Parameter for Astrophysical Magnetospheres</td>\
        <td>Lammer, H. & Khodachenko, M. (eds). <i>Characterizing stellar and exoplanetary environments</i>, Astrophysics and Space Science Library, Volume 411,  pp. 239&ndash;249. Springer, Cham<br>\
        <a context=citet href=https://doi.org/10.1007/978-3-319-09749-7_12>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015ASSL..411..239B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Goldreich, P. &<br>Tremaine, S.</td>\
        <td>The excitation of density waves at the Lindblad and corotation resonances by an external potential</td>\
        <td>ApJ, 233, 857<br>\
        <a context=citet href=https://doi.org/10.1086/157448>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1979ApJ...233..857G/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Hamers, A. S. & <br>Tremaine, S.</td>\
        <td>Hot Jupiters driven by high-eccentricity migration in globular clusters</td>\
        <td>AJ, 154, 272<br>\
        <a context=citet href=https://doi.org/10.3847/1538-3881/aa9926>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1710.00006>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017AJ....154..272H/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Lian, Y., <br>Tan, X., &<br>Hu, Y.</td>\
        <td>Jupiter's equatorial quasi-quadrennial oscillation forced by internal thermal forcing</td>\
        <td>ApJ, 958, 50<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acfca6>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.13953>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...958...50L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Lynden-Bell, D. &<br>Kalnajs, A. J.</td>\
        <td>On the generating mechanism of spiral structure</td>\
        <td>MNRAS, 157, 1<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/157.1.1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1972MNRAS.157....1L/abstract>ADSAbs</a></td>\
        <td>1972</td>\
    </tr>\
    <tr>\
        <td>Petrovich, C., <br>Muñoz, D., <br>Kratter, K. M., <br>Malhotra, R.</td>\
        <td>A disk-driven resonance as the origin of high inclinations of close-in planets</td>\
        <td>ApJL, 902, L5<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/abb952>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2008.08587>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020ApJ...902L...5P/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Roisin, A., <br>Doukhanin, N., <br>Teyssandier, J., & <br>Libert, A.-S.</td>\
        <td>Resonance capture and long-term evolution of planets in binary star mergers</td>\
        <td>A&A, 664, A87<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243344>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2206.08806>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..87R/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Schoonenberg, D., <br>Ormel, C. E., & <br>Krijt, S.</td>\
        <td>A Lagrangian model for dust evolution in protoplanetary disks: Formation of wet and dry planetesimals at different stellar masses</td>\
        <td>A&A, 620, A134<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201834047>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018A%26A...620A.134S/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>I. A simplified model</td>\
        <td>ApJ, 910, 13<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abda46>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2010.15617>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...910...13S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>II. Toward a self-consistent model</td>\
        <td>ApJ, 9154, 100<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ace68e>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.00951>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...954..100S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Smallwood, J. L., <span id='smallwoodetal' onclick='Smallwoodetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>GW Ori: Circumptriple rings and planets</td>\
        <td>MNRAS, 508, 392<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stab2624>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021MNRAS.508..392S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Tanaka, H., <br>Takeuchi, T., & <br>Ward, W. R.</td>\
        <td>Three-dimensional interaction between a planet and an isothermal gaseous disk. <br>I. Corotation and Lindblad torques and planet migration</td>\
        <td>ApJ, 565, 1257<br>\
        <a context=citet href=https://doi.org/10.1086/324713>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2002ApJ...565.1257T/abstract>ADSAbs</a></td>\
        <td>2002</td>\
    </tr>\
    <tr>\
        <td>Tanaka, H., & <br>Ward, W. R.</td>\
        <td>Three-dimensional interaction between a planet and an isothermal gaseous disk. <br>II. Eccentricity waves and bending waves</td>\
        <td>ApJ, 602, 388<br>\
        <a context=citet href=https://doi.org/10.1086/380992>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004ApJ...602..388T/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Ward, W. R.</td>\
        <td>Protoplanet migration by nebula tides</td>\
        <td>Icarus, 126, 261<br>\
        <a context=citet href=https://doi.org/10.1006/icar.1996.5647>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2000MNRAS.316..540C/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Wu, Y. & <br>Murray, N.</td>\
        <td>Planet migration and binary companions: The case of HD 80606b</td>\
        <td>ApJ, 589, 605<br>\
        <a context=citet href=https://doi.org/10.1086/374598>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2003ApJ...589..605W/abstract>ADSAbs</a></td>\
        <td>2003</td>\
    </tr>\
    <tr>\
        <td>Zhu, W. (<span style='font-family:Liu Jian Mao Cao;'>祝伟</span>), <br>Huang, C. X. (<span style='font-family:Liu Jian Mao Cao;'>黄煦</span>), <br>Zhou, G., & <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>)</td>\
        <td>Constraining the oblateness of Kepler planets</td>\
        <td>ApJ, 796, 67<br>\
        <a context=citet href=https://doi.org/10.1088/0004-637X/796/1/67>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014ApJ...796...67Z/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
</table>\
";
var fluids="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Belenkaya, E. S.,<br>Khodachenko, M. L., &<br>Alexeev, I. I.</td>\
        <td>Alfvén Radius: A Key Parameter for Astrophysical Magnetospheres</td>\
        <td>Lammer, H. & Khodachenko, M. (eds). <i>Characterizing stellar and exoplanetary environments</i>, Astrophysics and Space Science Library, Volume 411,  pp. 239&ndash;249. Springer, Cham<br>\
        <a context=citet href=https://doi.org/10.1007/978-3-319-09749-7_12>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015ASSL..411..239B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Kaaz, N., <br>Schrøder, S. L., <br>Andrews, J. J., <br>Antoni, A., &<br>Ramirez-Ruiz, E.</td>\
        <td>The hydrodynamic evolution of binary black holes embedded within the vertically stratified disks of active galactic nuclei</td>\
        <td>ApJ, 944, 44<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/aca967>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2103.12088>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944...44K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Kumar, H., <br>Kumar, B., <br>Rajaguru, S. P.</td>\
        <td>On the propagation of gravity waves in the lower solar atmosphere in different magnetic configurations</td>\
        <td>Advances in Space Research, 72, 1898<br>\
        <a context=citet href=https://doi.org/10.1016/j.asr.2023.04.054>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.02740>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023AdSpR..72.1898K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Li, J., <br>Dempsey, A., <br>Li, H., <br>Lai, D., &<br>Li, S.</td>\
        <td>Hydrodynamical simulations of black hole binary formation in AGN disks</td>\
        <td>ApJL, 944, L42<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/acb934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.10357>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944L..42L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>O'Neill, D., <br>D'Orazio, D. J., <br>Samsing, J., &<br>Pessah, M. E.</td>\
        <td>Gaseous dynamical friction on elliptical Keplerian orbits</td>\
        <td>ApJ, 974, 216<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad7250>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.16166>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...974..216O/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I. & <br>Colgate, S. A.</td>\
        <td>A magnetic \\(\alpha-\omega\\) dynamo in AGN disks. <br>I. The hydrodynamics of star-disk collisions and Keplerian flow</td>\
        <td>ApJ, 658, 114<br>\
        <a context=citet href=https://doi.org/10.1086/510734>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611139>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..114P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I., <br>Colgate, S. A., &<br>Finn, J. M.</td>\
        <td>A magnetic \\(\alpha-\omega\\) dynamo in AGN disks. <br>II. Magnetic field generation, theories, and simulations</td>\
        <td>ApJ, 658, 129<br>\
        <a context=citet href=https://doi.org/10.1086/510735>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611188>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..129P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Radice, D. &<br>Hawke, I.</td>\
        <td>Turbulence modelling in neutron star merger simulations</td>\
        <td>LRCA, 10, 1<br>\
        <a context=citet href=https://doi.org/10.1007/s41115-023-00019-9>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.03224>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024LRCA...10....1R/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Schoonenberg, D., <br>Ormel, C. E., & <br>Krijt, S.</td>\
        <td>A Lagrangian model for dust evolution in protoplanetary disks: Formation of wet and dry planetesimals at different stellar masses</td>\
        <td>A&A, 620, A134<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201834047>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018A%26A...620A.134S/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Su, K.-Y. (<span style='font-family:Yu Youren;'>蘇恭毅</span>)</td>\
        <td>Stellar feedback, AGN feedback, and fluid microphysics in galaxy evolution</td>\
        <td>PhD Thesis (CalTech)<br>\
        <a context=citet href=https://doi.org/10.7907/RQG9-NT50>DOI</a>\
         | <a context=citet href=https://resolver.caltech.edu/CaltechTHESIS:05142019-161824896>CalTech repo</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhDT.......163S/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Xu, K. (<span style='font-family:Liu Jian Mao Cao;'>许坤</span>), <br>Yang, H.-R., <br>Mao, Y.-H., <br>Xu, X.-T., <br>Li, X.-D., &<br>Liu, J.</td>\
        <td>Back to the starting point: On the simulation of the initial magnetic fields and spin periods of nonaccreting pulsars</td>\
        <td>ApJ, 947, 76<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acc8ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2304.03530>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...76X/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
</table>\
";

var accr="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Baruteau, C., <br>Fromang, S., <br>Nelson, R. P., &<br>Masset, F.</td>\
        <td>Corotation torques experienced by planets embedded in weakly magnetized turbulent discs</td>\
        <td>A&A, 533, A84<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201117227>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1107.2774>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2011A%26A...533A..84B/abstract>ADSAbs</a></td>\
        <td>2011</td>\
    </tr>\
    <tr>\
        <td>Bellovary, J. M., Mac Low, M.-M., <br>McKernan, B., &<br>Ford, K. E. S.<br></td>\
        <td>Migration traps in disks around supermassive black holes</td>\
        <td>ApJL, 819, L17<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8205/819/2/L17>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1511.00005>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2016ApJ...819L..17B/abstract>ADSAbs</a></td>\
        <td>2016</td>\
    </tr>\
    <tr>\
        <td>Cantiello, M., <br>Jermyn, A., &<br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>)</td>\
        <td>Stellar evolution in AGN disks</td>\
        <td>ApJ, 910, 94<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abdf4f>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2009.03936>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...910...94C/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Fabj, G. & Samsing, J.</td>\
        <td>Eccentric mergers in AGN discs: influence of the supermassive black hole on three-body interactions</td>\
        <td>MNRAS, 535, 3630<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae2499>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16948>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.535.3630F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Fasano, D., <span id='fasanoetal' onclick='Fasanoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Planet-driven spirals in protoplanetary discs: <br>Limitations of the semi-analytical theory for observations</td>\
        <td>A&A, 687. A223<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202450087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2405.15611>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...687A.223F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Constant angular momentum disks</td>\
        <td>Phys. Rev. D, 99, 043002<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.99.043002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1811.11492>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3002G/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Nonconstant angular momentum disks</td>\
        <td>Phys. Rev. D, 104, 103008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.104.103008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2106.15425>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.104j3008G/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Goldreich, P. &<br>Tremaine, S.</td>\
        <td>The excitation of density waves at the Lindblad and corotation resonances by an external potential</td>\
        <td>ApJ, 233, 857<br>\
        <a context=citet href=https://doi.org/10.1086/157448>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1979ApJ...233..857G/abstract>ADSAbs</a></td>\
        <td>1979</td>\
    </tr>\
    <tr>\
        <td>Ivanov, P. B. &<br>Zhuralev, V. V.</td>\
        <td>On the evolution of a twisted thin accretion disc in eccentric inclined supermassive binary black holes</td>\
        <td>MNRAS, 528, 337<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.01317>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528..337I/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kaaz, N., <br>Schrøder, S. L., <br>Andrews, J. J., <br>Antoni, A., &<br>Ramirez-Ruiz, E.</td>\
        <td>The hydrodynamic evolution of binary black holes embedded within the vertically stratified disks of active galactic nuclei</td>\
        <td>ApJ, 944, 44<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/aca967>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2103.12088>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944...44K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Kenzhebayeva, S.,<br>Toktarbay, S.,<br>Tursunov, A., &<br>Kološ, M.</td>\
        <td>Black hole in a combined magnetic field: Ionized accretion disks in the jetlike and looplike configurations</td>\
        <td>Phys. Rev. D, 109, 063005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.063005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16529>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f3005K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Li, G.-P. (<span style='font-family:Liu Jian Mao Cao;'>李国鹏</span>), <br>Lin, D.-B. (<span style='font-family:Liu Jian Mao Cao;'>林达斌</span>), &<br>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>)</td>\
        <td>Comparing hierarchical black hole mergers in star clusters and active galactic nuclei</td>\
        <td>Phys. Rev. D, 107, 063007<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.063007>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.11150>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107f3007L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Li, J., <br>Dempsey, A., <br>Li, H., <br>Lai, D., &<br>Li, S.</td>\
        <td>Hydrodynamical simulations of black hole binary formation in AGN disks</td>\
        <td>ApJL, 944, L42<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/acb934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.10357>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944L..42L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Lynden-Bell, D. &<br>Kalnajs, A. J.</td>\
        <td>On the generating mechanism of spiral structure</td>\
        <td>MNRAS, 157, 1<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/157.1.1>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1972MNRAS.157....1L/abstract>ADSAbs</a></td>\
        <td>1972</td>\
    </tr>\
    <tr>\
        <td>Nasim, S. S., <span id='nasimetal' onclick='Nasimetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Aligning retrograde nuclear cluster orbits with an active galactic nucleus accretion disc</td>\
        <td>MNRAS, 522, 5393<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1295>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2207.09540>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.5393N/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I.,<br>Blackman, E. G., &<br>Boldyrev, S. A.</td>\
        <td>Extending the Shakura-Sunyaev approach to a strongly magnetized accretion disc model</td>\
        <td>A&A, 407, 403<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361:20030868>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0208400>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2003A%26A...407..403P/abstract>ADSAbs</a></td>\
        <td>2003</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I. & <br>Colgate, S. A.</td>\
        <td>A magnetic \(\alpha-\omega\) dynamo in AGN disks. <br>I. The hydrodynamics of star-disk collisions and Keplerian flow</td>\
        <td>ApJ, 658, 114<br>\
        <a context=citet href=https://doi.org/10.1086/510734>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611139>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..114P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Pariev, V. I., <br>Colgate, S. A., &<br>Finn, J. M.</td>\
        <td>A magnetic \(\alpha-\omega\) dynamo in AGN disks. <br>II. Magnetic field generation, theories, and simulations</td>\
        <td>ApJ, 658, 129<br>\
        <a context=citet href=https://doi.org/10.1086/510735>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0611188>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2007ApJ...658..129P/abstract>ADSAbs</a></td>\
        <td>2007</td>\
    </tr>\
    <tr>\
        <td>Petrovich, C., <br>Muñoz, D., <br>Kratter, K. M., <br>Malhotra, R.</td>\
        <td>A disk-driven resonance as the origin of high inclinations of close-in planets</td>\
        <td>ApJL, 902, L5<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/abb952>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2008.08587>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020ApJ...902L...5P/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binary formation in AGN discs:<br>From isolation to merger</td>\
        <td>MNRAS, 524, 2770<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1926>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2212.06133>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.524.2770R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Rowan, C., <br>Whitehead, H., <br>Boekhold, T., <br>Kocsis, B., &<br>Haiman, Z.</td>\
        <td>Black hole binaries in AGN accretion discs.<br>II. Gas effects on black hole satellite scatterings</td>\
        <td>MNRAS, 527, 10448<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3641>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.14433>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.52710448R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>I. A simplified model</td>\
        <td>ApJ, 910, 13<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abda46>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2010.15617>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...910...13S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Sefilian, A.,<br>Rafikov, R., &<br>Wyatt, M. C.</td>\
        <td>Formation of gaps in self-gravitating debris disks by secular resonance in a single-planet system.<br>II. Toward a self-consistent model</td>\
        <td>ApJ, 9154, 100<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ace68e>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.00951>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...954..100S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Trani, A. A., <br>Quaini, S., &<br>Colpi, M.</td>\
        <td>Three-body encounters in black hole discs around a supermassive black hole. The disc velocity dispersion and the Keplerian tidal field determine the eccentricity and spin-orbit alignment of gravitational wave mergers</td>\
        <td>A&A, 683, A135<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347920>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2312.13281>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...683A.135T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zheng, X. (<span style='font-family:Liu Jian Mao Cao;'>郑晓晨</span>), <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>), &<br>Mao, S. (<span style='font-family:Liu Jian Mao Cao;'>毛淑德</span>)</td>\
        <td>The influence of the secular perturbation of an intermediate-mass companion.<br>I. Eccentricity excitation of disk stars at the Galactic Center</td>\
        <td>ApJ, 905, 169<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abc8e5>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2011.04653>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020ApJ...905..169Z/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Zheng, X. (<span style='font-family:Liu Jian Mao Cao;'>郑晓晨</span>), <br>Lin, D. N. C. (<span style='font-family:Liu Jian Mao Cao;'>林潮</span>), &<br>Mao, S. (<span style='font-family:Liu Jian Mao Cao;'>毛淑德</span>)</td>\
        <td>The influence of the secular perturbation of an intermediate-mass companion.<br>II. Ejection of hypervelocity stars from the Galactic Center</td>\
        <td>ApJ, 914, 33<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/abf5de>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2104.02989>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...914...33Z/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
</table>\
";

var plasma="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Alsina Ballester, E.,<br>Belluzzi, L.,<br>Trujillo Bueno, J.</td>\
        <td>The transfer of polarized radiation in resonance lines with partial frequency redistribution, \(J\)-state interference, and arbitrary magnetic fields. A radiative transfer code and useful approximations</td>\
        <td>A&A, 664, A76<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202142934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2204.12523>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..76A/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Belenkaya, E. S.,<br>Khodachenko, M. L., &<br>Alexeev, I. I.</td>\
        <td>Alfvén Radius: A Key Parameter for Astrophysical Magnetospheres</td>\
        <td>Lammer, H. & Khodachenko, M. (eds). <i>Characterizing stellar and exoplanetary environments</i>, Astrophysics and Space Science Library, Volume 411,  pp. 239&ndash;249. Springer, Cham<br>\
        <a context=citet href=https://doi.org/10.1007/978-3-319-09749-7_12>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015ASSL..411..239B/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Bice, C. P. &<br>Toomre, J.</td>\
        <td>Nature of intense magnetism and differential rotation in convective dynamos of M-dwarf stars with tachoclines</td>\
        <td>ApJ, 947, 36<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acac78>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...36B/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Braileanu, B. P. &<br>Keppens, R.</td>\
        <td>Two-fluid implementation in MPI-AMRVAC with applications to the solar chromosphere</td>\
        <td>A&A, 664, A55<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243630>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2205.05049>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..55B/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Cashen, B., <br>Aker, A., &<br>Kesden, M.</td>\
        <td>Gravitomagnetic dynamical friction</td>\
        <td>Phys. Rev. D, 95, 064014<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.064014>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1610.01590>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017Phys. Rev. D..95f4014C/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Cattorni, F. &<br>Giacomazzo, B.</td>\
        <td>GRMHD study of accreting massive black hole binaries in astrophysical environment: A review</td>\
        <td>Astropart. Phys., 154, 102892<br>\
        <a context=citet href=https://doi.org/10.1016/j.astropartphys.2023.102892>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.02521>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024APh...15402892C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Chakraborty, C., <br>Patil, P., &<br>Akash, G.</td>\
        <td>Magnetic Penrose process in the magnetized Kerr spacetime</td>\
        <td>Phys. Rev. D, 109, 064062<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.064062>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13347>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f4062C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Cloutier, S., <br>Cameron, R. H., &<br>Gizon, L.</td>\
        <td>A Babcock-Leighton dynamo model of the Sun incorporating toroidal flux loss and the helioseismically inferred meridional flow</td>\
        <td>A&A, 680, A42<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347022>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.17328>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...680A..42C/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Dumin, Y. V. &<br>Somov, B. V.</td>\
        <td>Unipolar solar flares as a manifestation of 'topological' magnetic reconnection</td>\
        <td>MNRAS Lett., 528, L15<br>\
        <a context=citet href=https://doi.org/10.1093/mnrasl/slad162>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.16417>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528L..15D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Etienne, Z. B., <span id='etienneetal' onclick='Etienneetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>IllinoisGRMHD: an open-source, user-friendly GRMHD code for dynamical spacetimes</td>\
        <td>CQGr, 32, 175009<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/32/17/175009>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1501.07276>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2015CQGra..32q5009E/abstract>ADSAbs</a></td>\
        <td>2015</td>\
    </tr>\
    <tr>\
        <td>Kenzhebayeva, S.,<br>Toktarbay, S.,<br>Tursunov, A., &<br>Kološ, M.</td>\
        <td>Black hole in a combined magnetic field: Ionized accretion disks in the jetlike and looplike configurations</td>\
        <td>Phys. Rev. D, 109, 063005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.063005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16529>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f3005K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Levin, Y. &<br>D'Angelo, C.</td>\
        <td>Hydromagnetic and gravitomagnetic crust-core coupling in a precessing neutron star</td>\
        <td>ApJ, 613, 1157<br>\
        <a context=citet href=https://doi.org/10.1086/423197>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0403014>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004ApJ...613.1157L/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Liska, M. T. P., <span id='liskaetal' onclick='Liskaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Magnetic flux plays an important role during a black hole X-ray binary outburst in radiative two-temperature general relativistic magnetohydrodynamical simulations</td>\
        <td>ApJ, 966, 47<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad344a>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15926>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...966...47L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Nättilä, J.</td>\
        <td>Runko: Modern multiphysics toolbox for plasma simulations</td>\
        <td>A&A, 664, A68<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/201937402>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1906.06306>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..68N/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Pjanka, P., <br>Demidem, C., &<br>Veledina, A.</td>\
        <td>Shock corrugation to the rescue of the internal shock model in microquasars: The single-scale magnetohydrodynamic view</td>\
        <td>ApJ, 947, 57<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acbf35>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2301.05686>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...57P/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Porth, O., <span id='porthetal' onclick='Porthetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>The Event Horizon General Relativistic Magnetohydrodynamic Code Comparison Project</td>\
        <td>ApJS, 243, 26<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4365/ab29fd>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1904.04923>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019ApJS..243...26P/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Ruan, W.,<br>Yan, L., &<br>Keppens, R.</td>\
        <td>Magnetohydrodynamic turbulence formation in solar flares: 3D simulation and synthetic observations</td>\
        <td>ApJ, 947, 67<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac9b4e>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2210.09856>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...67R/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Susková, P., <br>Zajaček, M., <br>Witzany, V., &<br>Karas, V.</td>\
        <td>Stellar transits across a magnetized accretion torus as a mechanism for plasmoid ejection</td>\
        <td>ApJ, 917, 43<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac05c6>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2102.08135>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...917...43S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Wang, H.-S. (<span style='font-family:Yu Youren;'>王皓陞</span>), <br>Pan, K.-C. (<span style='font-family:Yu Youren;'>潘國全</span>)</td>\
        <td>The influence of stellar rotation in binary systems on core-collapse supernova progenitors and multimessenger signals</td>\
        <td>ApJ, 964, 23<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad2076>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.08985>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...964...23W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Xu, K. (<span style='font-family:Liu Jian Mao Cao;'>许坤</span>), <br>Yang, H.-R., <br>Mao, Y.-H., <br>Xu, X.-T., <br>Li, X.-D., &<br>Liu, J.</td>\
        <td>Back to the starting point: On the simulation of the initial magnetic fields and spin periods of nonaccreting pulsars</td>\
        <td>ApJ, 947, 76<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acc8ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2304.03530>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...76X/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Zier, O., <br>Springel, V., &<br>Mayer, A. C.</td>\
        <td>Non-ideal magnetohydrodynamics on a moving mesh.<br>I. Ohmic and ambipolar diffusion</td>\
        <td>MNRAS, 527, 1563<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3200>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2307.11814>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.527.1563Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zier, O., <br>Springel, V., &<br>Mayer, A. C.</td>\
        <td>Non-ideal magnetohydrodynamics on a moving mesh.<br>II. Hall effect</td>\
        <td>MNRAS, 527, 8355<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad3769>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15907>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.527.8355Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
</table>\
";

var stars="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Bice, C. P. &<br>Toomre, J.</td>\
        <td>Nature of intense magnetism and differential rotation in convective dynamos of M-dwarf stars with tachoclines</td>\
        <td>ApJ, 947, 36<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acac78>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...36B/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Braileanu, B. P. &<br>Keppens, R.</td>\
        <td>Two-fluid implementation in MPI-AMRVAC with applications to the solar chromosphere</td>\
        <td>A&A, 664, A55<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243630>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2205.05049>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664A..55B/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Cloutier, S., <br>Cameron, R. H., &<br>Gizon, L.</td>\
        <td>A Babcock-Leighton dynamo model of the Sun incorporating toroidal flux loss and the helioseismically inferred meridional flow</td>\
        <td>A&A, 680, A42<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347022>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.17328>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...680A..42C/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Eggenberger, P., <br>Moyano, F. D., &<br>den Hartogh, J. W.</td>\
        <td>Rotation in stellar interiors: General formulation and an asteroseismic-calibrated transport by the Tayler instability</td>\
        <td>A&A, 664, L16<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202243781>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.17396>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022A%26A...664L..16E/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Kenzhebayeva, S.,<br>Toktarbay, S.,<br>Tursunov, A., &<br>Kološ, M.</td>\
        <td>Black hole in a combined magnetic field: Ionized accretion disks in the jetlike and looplike configurations</td>\
        <td>Phys. Rev. D, 109, 063005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.063005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16529>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f3005K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kumar, H., <br>Kumar, B., <br>Rajaguru, S. P.</td>\
        <td>On the propagation of gravity waves in the lower solar atmosphere in different magnetic configurations</td>\
        <td>Advances in Space Research, 72, 1898<br>\
        <a context=citet href=https://doi.org/10.1016/j.asr.2023.04.054>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.02740>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023AdSpR..72.1898K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Mignon-Risse, R., <br>González, M., <br>Commerçon, B., &<br>Rosdahl, J.</td>\
        <td>Collapse of turbulent massive cores with ambipolar diffusion and hybrid radiative transfer.<br>I. Accretion and multiplicity</td>\
        <td>A&A, 652, A69<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202140617>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2105.14543>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021A%26A...652A..69M/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Mignon-Risse, R., <br>González, M., &<br>Commerçon, B.</td>\
        <td>Collapse of turbulent massive cores with ambipolar diffusion and hybrid radiative transfer.<br>II. Outflows</td>\
        <td>A&A, 656, A85<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202141648>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2109.11241>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021A%26A...656A..85M/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Susková, P., <br>Zajaček, M., <br>Witzany, V., &<br>Karas, V.</td>\
        <td>Stellar transits across a magnetized accretion torus as a mechanism for plasmoid ejection</td>\
        <td>ApJ, 917, 43<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac05c6>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2102.08135>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...917...43S/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Wang, H.-S. (<span style='font-family:Yu Youren;'>王皓陞</span>), <br>Pan, K.-C. (<span style='font-family:Yu Youren;'>潘國全</span>)</td>\
        <td>The influence of stellar rotation in binary systems on core-collapse supernova progenitors and multimessenger signals</td>\
        <td>ApJ, 964, 23<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad2076>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.08985>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...964...23W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
</table>\
";

var gr="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Baumann, D., <br>Bertone, G., <br>Stout, J., &<br>Tomaselli, G. M.</td>\
        <td>Ionization of gravitational atoms</td>\
        <td>Phys. Rev. D, 105, 115036<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.105.115036>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2112.14777>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022Phys. Rev. D.105k5036B/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Capozziello, S., <br>Capriolo, M., &<br>Nojiri, S.</td>\
        <td>Gravitational waves in \\(f(Q)\\) non-metric gravity via geodesic deviation</td>\
        <td>Phys. Lett. B, 850, 138510<br>\
        <a context=citet href=https://doi.org/10.1016/j.physletb.2024.138510>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.06424>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhLB..85038510C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Chakraborty, C., <br>Patil, P., &<br>Akash, G.</td>\
        <td>Magnetic Penrose process in the magnetized Kerr spacetime</td>\
        <td>Phys. Rev. D, 109, 064062<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.064062>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13347>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f4062C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>De Falco, V., <br>Battista, E., <br>Usseglio, D., &<br>Capozziello, S.</td>\
        <td>Radiative losses and radiation-reaction effects at the first post-Newtonian order in Einstein-Cartan theory</td>\
        <td>Eur. Phys. Jour. C, 84, 137<br>\
        <a context=citet href=https://doi.org/10.1140/epjc/s10052-024-12476-4>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13374>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..137D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Constant angular momentum disks</td>\
        <td>Phys. Rev. D, 99, 043002<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.99.043002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1811.11492>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3002G/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Nonconstant angular momentum disks</td>\
        <td>Phys. Rev. D, 104, 103008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.104.103008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2106.15425>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.104j3008G/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Pi, C.-M. (<span style='font-family:Liu Jian Mao Cao;'>皮春梅</span>) &<br>Yang, S.-H. (<span style='font-family:Liu Jian Mao Cao;'>杨书华</span>)</td>\
        <td>Non-Newtonian gravity in strange stars and constraints from the observations of compact stars</td>\
        <td>New Astronomy, 90, 101670<br>\
        <a context=citet href=https://doi.org/10.1016/j.newast.2021.101670>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022NewA...9001670P/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Pourhassan, B., <br>Farahani, H., <br>Kazemian, F., <br>Sakallı, İ., <br>Upadhyay, S., &<br>Singh, D. V.</td>\
        <td>Non-perturbative correction on the black hole geometry</td>\
        <td>PDU, 44, 101444<br>\
        <a context=citet href=https://doi.org/10.1016/j.dark.2024.101444>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.07972>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PDU....4401444P/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Volkov, M. S. &<br>Galt'sov, D. V.</td>\
        <td>Gravitating non-Abelian solitons and black holes with Yang-Mills fields</td>\
        <td>Phys. Rep., 319, 1<br>\
        <a context=citet href=https://doi.org/10.1016/S0370-1573(99)00010-1>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/hep-th/9810070>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhR...319....1V/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Wojnar, A., <br>Kalita, S., &<br>Sarmah, L.</td>\
        <td>Effects of modified gravity on microscopic properties and cooling timescale of white dwarfs</td>\
        <td>Phys. Lett. B, 850, 138494<br>\
        <a context=citet href=https://doi.org/10.1016/j.physletb.2024.138494>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.14775>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhLB..85038494W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
</table>\
";

var gw="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Abac, A. G., <i>et al.</i></td>\
        <td>Search for Eccentric Black Hole Coalescences during the Third Observing Run of LIGO and Virgo</td>\
        <td>ApJ, 973, 132<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad65ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2308.03822>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ApJ...973..132A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Apte, A. &<br>Hugh, S. A.</td>\
        <td>Exciting black hole modes via misaligned coalescences.<br>I. Inspiral, transition, and plunge trajectories using a generalized Ori-Thorne procedure</td>\
        <td>Phys. Rev. D, 100, 084031<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.100.084031>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1901.05901>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD.100h4031A/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Arredondo, J. N., <br>Klein, A., &<br>Yunes, N.</td>\
        <td>Efficient gravitational-wave model for fully-precessing and moderately eccentric, compact binary inspirals</td>\
        <td>Phys. Rev. D, 110, 044044<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.044044>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.06804>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110d4044A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Barack, L. &<br>Cutler, C.</td>\
        <td>LISA capture sources: Approximate waveforms, signal-to-noise ratios, and parameter estimation accuracy</td>\
        <td>Phys. Rev. D, 69, 082005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.69.082005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/0310125>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004PhRvD..69h2005B/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Blanchet, L.</td>\
        <td>Gravitational radiation from Post-Newtonian sources and inspiralling compact binaries</td>\
        <td>LRR, 17, 2<br>\
        <a context=citet href=https://doi.org/10.12942/lrr-2014-2>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1310.1528>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014LRR....17....2B/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Capozziello, S., <br>Capriolo, M., &<br>Nojiri, S.</td>\
        <td>Gravitational waves in \\(f(Q)\\) non-metric gravity via geodesic deviation</td>\
        <td>Phys. Lett. B, 850, 138510<br>\
        <a context=citet href=https://doi.org/10.1016/j.physletb.2024.138510>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.06424>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhLB..85038510C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Cutler, C. &<br>Flanagan, É. É.</td>\
        <td>Gravitational waves from merging compact binaries: How accurately can one extract the binary's parameters from the inspiral waveform?</td>\
        <td>Phys. Rev. D, 49, 2658<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.49.2658>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9402014>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1994PhRvD..49.2658C/abstract>ADSAbs</a></td>\
        <td>1994</td>\
    </tr>\
    <tr>\
        <td>De Falco, V., <br>Battista, E., <br>Usseglio, D., &<br>Capozziello, S.</td>\
        <td>Radiative losses and radiation-reaction effects at the first post-Newtonian order in Einstein-Cartan theory</td>\
        <td>Eur. Phys. Jour. C, 84, 137<br>\
        <a context=citet href=https://doi.org/10.1140/epjc/s10052-024-12476-4>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.13374>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..137D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Dhurandhar, S. V. &<br> Tinto, M.</td>\
        <td>Astronomical observations with a network of detectors of gravitational waves.<br>I. Mathematical framework and solution of the five detector problem</td>\
        <td>MNRAS, 234, 663<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/234.3.663>DOI</a>\
         | <\href=https://ui.adsabs.harvard.edu/abs/1988MNRAS.234..663D/abstract>ADSAbs</a></td>\
        <td>1988</td>\
    </tr>\
    <tr>\
        <td>Tinto, M. &<br>Dhurandhar, S.</td>\
        <td>Astronomical observations with a network of detectors of gravitational waves.<br>II. Solution to the four and three detector problem</td>\
        <td>MNRAS, 236, 621<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/236.3.621>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1989MNRAS.236..621T/abstract>ADSAbs</a></td>\
        <td>1989</td>\
    </tr>\
    <tr>\
        <td>Dietrich, T., <span id='dietrichetal' onclick='Dietrichetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the mass ratio</td>\
        <td>Phys. Rev. D, 95, 024029<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.024029>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1607.06636>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017PhRvD..95b4029D/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Dietrich, T., <br>Bernuzzi, S., <br>Uvevic, M., &<br>Tichy, W.</td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the stars' rotation</td>\
        <td>Phys. Rev. D, 95, 044045<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.95.044045>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1611.07367>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2017PhRvD..95d4045D/abstract>ADSAbs</a></td>\
        <td>2017</td>\
    </tr>\
    <tr>\
        <td>Chaurasia, S. V., <span id='charausia1etal' onclick='Charausia1etal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of large eccentricities</td>\
        <td>Phys. Rev. D, 98, 104005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.98.104005>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018PhRvD..98j4005C/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Charausia, S. V., <span id='charausia2etal' onclick='Charausia2etal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational waves and mass ejecta from binary neutron star mergers: Effect of the spin orientation</td>\
        <td>Phys. Rev. D, 102, 024087<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.102.024087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2003.11901>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.102b4087C/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Feng, W.-F., <span id='fengetal' onclick='Fengetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Inferring binary parameters with dual-line gravitational wave detection from tight inspiraling double neutron stars</td>\
        <td>Phys. Rev. D, 109, 043033<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.043033>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.11241>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109d3033F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Finn, L. S. &<br>Chernoff, D. F.</td>\
        <td>Observing binary inspiral in gravitational radiation: One interferometer</td>\
        <td>Phys. Rev. D, 47, 2198<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.47.2198>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9301003>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1993PhRvD..47.2198F/abstract>ADSAbs</a></td>\
        <td>1993</td>\
    </tr>\
    <tr>\
        <td>Flanagan, É. É. &<br>Hughes, S. A.</td>\
        <td>Measuring gravitational waves from binary black hole coalescences.<br>I. Signal to noise for inspiral, merger, and ringdown</td>\
        <td>Phys. Rev. D, 57, 4535<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.4535>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9701039>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.4535F/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Flanagan, É. É. &<br>Hughes, S. A.</td>\
        <td>Measuring gravitational waves from binary black hole coalescences.<br>II. The waves' information and its extraction, with and without templates</td>\
        <td><br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.4566>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9710129>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.4566F/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Flores, C. V., <span id='floresetal' onclick='Floresetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational wave asteroseismology of dark matter hadronic stars</td></a>\
        <td>Phys. Rev. D, 109, 083021<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.109.083021>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.12600>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h3021F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Gossan, S. E., <br> Hall, E. D., &<br>\Nissanke, S. M.</td>\
        <td>Optimizing the third generation of gravitational-wave observatories for galactic astrophysics</td>\
        <td>ApJ, 926, 231<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac4164>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2110.15322>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022ApJ...926..231G/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Herrera, L., <br>Di Prisco, A., &<br>Ospino, J.</td>\
        <td>Irreversibility and gravitational radiation: A proof of Bondi's conjecture</td>\
        <td>Phys. Rev. D, 109, 024005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.024005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.05959>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109b4005H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Hou, S. (<span style='font-family:Liu Jian Mao Cao;'>侯绍齐</span>), <br>Fan, X.-L. (<span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), <br>Zhu, T. (<span style='font-family:Liu Jian Mao Cao;'>朱涛</span>), &<br>Zhu, Z.-H. (<span style='font-family:Liu Jian Mao Cao;'>朱宗宏</span>)</td>\
        <td>Nontensorial gravitational wave polarizations from the tensorial degrees of freedom: Linearized Lorentz-violating theory of gravity</td>\
        <td>Phys. Rev. D, 109, 084011<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.084011>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.03474>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h4011H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Islam, T.</td>\
        <td>Straightforward mode hierarchy in eccentric binary black hole mergers and associated waveform model</td>\
        <td><a context=citet href=https://doi.org/10.48550/arXiv.2403.15506>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.15506>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv240315506I/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Li, Z. &<br>Chen, X.</td>\
        <td>Compact objects in close orbits as gravitational wave sources: Formation scenarios and properties</td>\
        <td>Res. Phys., 59, 107568<br>\
        <a context=citet href=https://doi.org/10.1016/j.rinp.2024.107568>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.06358>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ResPh..5907568L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Liang, D., <br>Chen, S., <br>Zhang, C., &<br>Shao, L.</td>\
        <td>Unveiling the existence of nontensorial gravitational-wave polarizations from individual supermassive black hole binaries with pulsar timing arrays</td>\
        <td>Phys. Rev. D, 110, 084040<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.084040>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2404.16680>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110h4040L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Lim, H., <br>Khanna, G., <br>Apte, A., &<br>Hughes, S. A.</td>\
        <td>Exciting black hole modes via misaligned coalescences.<br>II. The mode content of late-time coalescence waveforms</td>\
        <td>Phys. Rev. D, 100, 084032<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.100.084032>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1901.05902>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD.100h4032L/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Martel, K. &<br>Poisson, E.</td>\
        <td>Gravitational waves from eccentric compact binaries: Reduction in signal-to-noise ratio due to nonoptimal signal processing</td>\
        <td>Phys. Rev. D, 60, 124008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.60.124008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9907006>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhRvD..60l4008M/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Ng, H. H.-Y., <br>Cheong, P. C.-K., <br>Lin, L.-M. &<br>L., T. G. F.</td>\
        <td>Gravitational-wave asteroseismology with \\(f\\)-modes from neutron star binaries at the merger phase</td>\
        <td>ApJ, 915, 108<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac0141>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2012.08263>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...915..108N/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Ossokine, S., <span id='ossokineetal' onclick='Ossokineetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Multipolar effective-one-body waveforms for precessing binary black holes: Construction and validation</td>\
        <td>Phys. Rev. D, 102, 044055<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.102.044055>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2004.09442>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.102d4055O/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Peters, P. C. &<br>Mathews, J.</td>\
        <td>Gravitational radiation from point masses in a Keplerian orbit</td>\
        <td>Phys. Rev., 131, 435<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRev.131.435>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1963PhRv..131..435P/abstract>ADSAbs</a></td>\
        <td>1963</td>\
    </tr>\
    <tr>\
        <td>Poisson, E. &<br>Clifford, M.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Parameter estimation using second-post-Newtonian waveforms</td>\
        <td>Phys. Rev. D, 52, 848<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.52.848>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9502040>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1995PhRvD..52..848P/abstract>ADSAbs</a></td>\
        <td>1995</td>\
    </tr>\
    <tr>\
        <td>Droz, S. & <br>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Second post-Newtonian waveforms as search templates</td>\
        <td>Phys. Rev. D, 56, 4449<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.56.4449>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9705034>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1997PhRvD..56.4449D/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: The quadrupole-moment term</td>\
        <td>Phys. Rev. D, 57, 5287<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.57.5287>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9709032>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998PhRvD..57.5287P/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Poisson, E.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Accuracy of the post-Newtonian waveforms</td>\
        <td><a context=citet href=https://arxiv.org/abs/gr-qc/9801038>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998gr.qc.....1038P/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Droz, S., <br>Knapp, D. J., <br>Poisson, E., <br>Owen, B. J.</td>\
        <td>Gravitational waves from inspiraling compact binaries: Validity of the stationary-phase approximation to the Fourier transform</td>\
        <td>Phys. Rev. D, 59, 124016<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.59.124016>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9901076>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhRvD..59l4016D/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Rafel, J., <br>Tenorio, R., &<br>Sintes, A. M.</td>\
        <td>Assessing the similarity of continuous gravitational-wave signals to narrow instrumental artifacts</td>\
        <td>Universe, 10, 121<br>\
        <a context=citet href=https://doi.org/10.3390/universe10030121>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.03027>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Univ...10..121J/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Roulet, J. &<br>Venumadhav, T.</td>\
        <td>Inferring Binary Properties from Gravitational-Wave Signals</td>\
        <td>ARNPS, 74, 207<br>\
        <a context=citet href=https://doi.org/10.1146/annurev-nucl-121423-100725>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.11439>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024ARNPS..74..207R/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Samsing, J., <span id='samsingetal' onclick='Samsingetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Gravitational wave phase shifts in eccentric black hole mergers as a probe of dynamical formation environments</td>\
        <td><a context=citet href=https://arxiv.org/abs/2403.05625>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv240305625S/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Sathyaprakash, B. S. &<br>Dhurandhar, S. V.</td>\
        <td>Choice of filters for the detection of gravitational waves from coalescing binaries</td>\
        <td>Phys. Rev. D, 44, 3819<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.44.3819>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1991PhRvD..44.3819S/abstract>ADSAbs</a></td>\
        <td>1991</td>\
    </tr>\
    <tr>\
        <td>Simone, L. E., <br>Leonard, S. W., <br>Poisson, E., &<br>Will, C. M.</td>\
        <td>Gravitational waves from binary systems in circular orbits: Does the post-Newtonian expansion converge?</td>\
        <td>CQGr, 14, 237<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/14/1/021>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9610058>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1997CQGra..14..237S/abstract>ADSAbs</a></td>\
        <td>1997</td>\
    </tr>\
    <tr>\
        <td>Leonard, S. W. &<br>Poisson, E.</td>\
        <td>Gravitational waves from binary systems in circular orbits: Convergence of a partially bare multipole expansion</td>\
        <td>CQGr, 15, 2075<br>\
        <a context=citet href=https://doi.org/10.1088/0264-9381/15/8/002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9708037>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1998CQGra..15.2075L/abstract>ADSAbs</a></td>\
        <td>1998</td>\
    </tr>\
    <tr>\
        <td>Sotani, H. &<br>Dohi, A.</td>\
        <td>Gravitational wave asteroseismology on cooling neutron stars</td>\
        <td>Phys. Rev. D 105, 023007<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.105.023007</a>\
         | <a context=citet href=https://arxiv.org/abs/2201.00648>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022PhRvD.105b3007S/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Trani, A. A., <br>Quaini, S., &<br>Colpi, M.</td>\
        <td>Three-body encounters in black hole discs around a supermassive black hole. The disc velocity dispersion and the Keplerian tidal field determine the eccentricity and spin-orbit alignment of gravitational wave mergers</td>\
        <td>A&A, 683, A135<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202347920>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2312.13281>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...683A.135T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>), <br>Fan, X.-L. <span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), &<br>Lü, H.-J.</td>\
        <td>Constraining the ellipticity and frequency of binary neutron star remnant via its gravitational-wave and electromagnetic radiations</td>\
        <td>MNRAS, 522, 4294<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1266>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01364>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4294Y/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Wagoner, R. V. &<br>Will, C. M.</td>\
        <td>Post-Newtonian gravitational radiation from orbiting point masses</td>\
        <td>ApJ, 210, 764<br>\
        <a context=citet href=https://doi.org/10.1086/154886>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1976ApJ...210..764W/abstract>ADSAbs</a></td>\
        <td>1976</td>\
    </tr>\
    <tr>\
        <td>Wagoner, R. V. &<br>Will, C. M.</td>\
        <td>Erratum: Post-Newtonian gravitational radiation from orbiting point masses</td>\
        <td>ApJ, 215, 984<br>\
        <a context=citet href=https://doi.org/10.1086/155435>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1977ApJ...215..984W/abstract>ADSAbs</a></td>\
        <td>1977</td>\
    </tr>\
    <tr>\
        <td>Wilson, O. H. &<br>Ho, W. C. G.</td>\
        <td>Gravitational waves from glitch-induced \\(f\\)-mode oscillations in quark and neutron stars</td>\
        <td>Phys. Rev. D, 109, 083006<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.083006>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.09489>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h3006W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zalamea, I., <br>Menou, K., &<br>Beloborodov, A. M.</td>\
        <td>White dwarfs stripped by massive black holes: Sources of coincident gravitational and electromagnetic radiation</td>\
        <td><br>\
        <a context=citet href=https://doi.org/10.1111/j.1745-3933.2010.00930.x>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1005.3987>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2010MNRAS.409L..25Z/abstract>ADSAbs</a></td>\
        <td>2010</td>\
    </tr>\
    <tr>\
        <td>Zwick, L., <span id='zwicketal' onclick='Zwicketal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Novel category of environmental effects on gravitational waves from binaries perturbed by periodic forces</td>\
        <td>Phys. Rev. D, 110, 103005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.110.103005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2405.05698>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.110j3005Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
</table>\
";

var bh="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Alfaro, J., <br>Espriu, D., &<br>Gabbanelli, L.</td>\
        <td>Bose-Einstein graviton condensate in a Schwarzschild black hole</td>\
        <td>CQGr, 35, 015001<br>\
        <a context=citet href=https://doi.org/10.1088/1361-6382/aa9771>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1609.01639>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018CQGra..35a5001A/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Cattorni, F. &<br>Giacomazzo, B.</td>\
        <td>GRMHD study of accreting massive black hole binaries in astrophysical environment: A review</td>\
        <td>Astropart. Phys., 154, 102892<br>\
        <a context=citet href=https://doi.org/10.1016/j.astropartphys.2023.102892>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.02521>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024APh...15402892C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Chruściel, P. T., <br>Costa, J. L., &<br>Heusler, M.</td>\
        <td>Stationary black holes: Uniqueness and beyond</td>\
        <td>LRR, 15, 7<br>\
        <a context=citet href=https://doi.org/10.12942/lrr-2012-7>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1205.6112>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2012LRR....15....7C/abstract>ADSAbs</a></td>\
        <td>2012</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B.</td>\
        <td>Three-dimensional initial data for the collision of two black holes. II. Quasicircular orbits for equal-mass black holes</td>\
        <td>Phys. Rev. D, 50, 5025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.50.5025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/gr-qc/9404043>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/1994Phys. Rev. D..50.5025C/abstract>ADSAbs</a></td>\
        <td>1994</td>\
    </tr>\
    <tr>\
        <td>Cook, G. B., <span id='cooketal' onclick='Cooketal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Three-dimensional initial data for the collision of two black holes</td>\
        <td>Phys. Rev. D, 47, 1471<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.47.1471>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1993Phys. Rev. D..47.1471C/abstract>ADSAbs</a></td>\
        <td>1993</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Constant angular momentum disks</td>\
        <td>Phys. Rev. D, 99, 043002<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.99.043002>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1811.11492>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2019PhRvD..99d3002G/abstract>ADSAbs</a></td>\
        <td>2019</td>\
    </tr>\
    <tr>\
        <td>Gimeno-Soler, S., <br>Font, J. A., <br>Herdeiro, C., &<br>Radu, E.</td>\
        <td>Magnetized accretion disks around Kerr black holes with scalar hair: Nonconstant angular momentum disks</td>\
        <td>Phys. Rev. D, 104, 103008<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.104.103008>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2106.15425>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021PhRvD.104j3008G/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Herdeiro, C. A. R. &<br>Radu, E.</td>\
        <td>Kerr black holes with scalar hair</td>\
        <td>Phys. Rev. Lett., 112, 221101<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevLett.112.221101>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1403.2757>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014PhRvL.112v1101H/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Ho, P.-M., <br>Kawai, <br>Liao, H., &<br>Yokokura, Y.</td>\
        <td>4D Weyl anomaly and diversity of the interior structure of quantum black hole</td>\
        <td>Eur. Phys. Jour. C, 84, 711<br>\
        <a context=citet href=https://doi.org/https://doi.org/10.1140/epjc/s10052-024-13058-0>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2307.08569>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..711H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kenzhebayeva, S.,<br>Toktarbay, S.,<br>Tursunov, A., &<br>Kološ, M.</td>\
        <td>Black hole in a combined magnetic field: Ionized accretion disks in the jetlike and looplike configurations</td>\
        <td>Phys. Rev. D, 109, 063005<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.063005>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.16529>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Phys. Rev. D.109f3005K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Li, J., <br>Dempsey, A., <br>Li, H., <br>Lai, D., &<br>Li, S.</td>\
        <td>Hydrodynamical simulations of black hole binary formation in AGN disks</td>\
        <td>ApJL, 944, L42<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/acb934>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2211.10357>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...944L..42L/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Lin, F.-L., <br>Patel, A., <br>Pu, H.-Y.</td>\
        <td>Black hole shadow with soft hairs</td>\
        <td>JHEP, 2022, 117<br>\
        <a context=citet href=https://doi.org/10.1007/JHEP09(2022)117>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2202.13559>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022JHEP...09..117L/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Nieuwenhuizen, T. M.</td>\
        <td>The interior of hairy black holes in standard model physics</td>\
        <td><a context=citet href=https://doi.org/10.48550/arXiv.2108.01422>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2108.01422>ArXiv</a>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Nitta, S.-Y.</td>\
        <td>An application of the Kerr black hole fly-wheel model to statistical properties of QSOs/AGNs</td>\
        <td>MNRAS, 308, 995<br>\
        <a context=citet href=https://doi.org/10.1046/j.1365-8711.1999.02762.x>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/9905180>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999MNRAS.308..995N/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Pourhassan, B., <br>Farahani, H., <br>Kazemian, F., <br>Sakallı, İ., <br>Upadhyay, S., &<br>Singh, D. V.</td>\
        <td>Non-perturbative correction on the black hole geometry</td>\
        <td>PDU, 44, 101444<br>\
        <a context=citet href=https://doi.org/10.1016/j.dark.2024.101444>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.07972>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PDU....4401444P/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Schutz, B. F.</td>\
        <td>Asteroseismology of neutron stars and black holes</td>\
        <td>Jour. Phys.: Conf. Ser., 118, 012005<br>\
        <a context=citet href=https://doi.org/10.1088/1742-6596/118/1/012005>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2008JPhCS.118a2005S/abstract>ADSAbs</a></td>\
        <td>2008</td>\
    </tr>\
    <tr>\
        <td>Suleimanov, V. F., <br>Poutanen, J., <br>Doroshenko, V., &<br>Werner, K.</td>\
        <td>Expected polarization properties of nonmagnetized CCOs</td>\
        <td>A&A, 673, A15<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202346092>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2303.01382>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023A%26A...673A..15S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Tamar, A.,<br>Hudson, B., &<br>Palumbo, D. C. M.</td>\
        <td>Effects of Earth's oblateness on black hole imaging through Earth-space and space-space very long baseline interferometry</td>\
        <td>ApJ, 967, 90<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ad31a7>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.08606>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/#abs/2024ApJ...967...90T/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Volkov, M. S. &<br>Galt'sov, D. V.</td>\
        <td>Gravitating non-Abelian solitons and black holes with Yang-Mills fields</td>\
        <td>Phys. Rep., 319, 1<br>\
        <a context=citet href=https://doi.org/10.1016/S0370-1573(99)00010-1>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/hep-th/9810070>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/1999PhR...319....1V/abstract>ADSAbs</a></td>\
        <td>1999</td>\
    </tr>\
    <tr>\
        <td>Wang, K., <br>Feng, C.-J. (<span style='font-family:Liu Jian Mao Cao;'>冯朝君</span>), &<br>Wang, T.</td>\
        <td>Image of Kerr–de Sitter black holes illuminated by equatorial thin accretion disks</td>\
        <td>Eur. Phys. Jour. C, 84, 457<br>\
        <a context=citet href=https://doi.org/10.1140/epjc/s10052-024-12825-3>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.16944>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024EPJC...84..457W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>), <br>Fan, X.-L. <span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), &<br>Lü, H.-J.</td>\
        <td>Constraining the ellipticity and frequency of binary neutron star remnant via its gravitational-wave and electromagnetic radiations</td>\
        <td>MNRAS, 522, 4294<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1266>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01364>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4294Y/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
</table>\
";

var ns="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Benáček, J., <br>Muñoz, P. A., <br>Büchner, J., &<br>Jessner, A.</td>\
        <td>Streaming instability in neutron star magnetospheres: No indication of soliton-like waves</td>\
        <td>A&A, 683, A69<br>\
        <a context=citet href=https://doi.org/10.1051/0004-6361/202348087>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15613>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024A%26A...683A..69B/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Cheunchitra, T., <br>Melatos, A,, <br>Carlin, J. B., &<br>Howitt, G.</td>\
        <td>Persistent gravitational radiation from glitching pulsars.<br>II. Updated scaling with vortex number</td>\
        <td>MNRAS, 528, 1360<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae130>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.05600>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.1360C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Dong, W. &<br>Melatos, A.<\td>\
        <td>Gravitational waves from \\(r\\)-mode oscillations of stochastically accreting neutron stars</td>\
        <td>MNRAS, 537, 650\
        <a> context=citet href=https://www.doi.org/10.1093/mnras/staf033>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025MNRAS.537..650D/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Feng, W.-F., <span id='fengetal' onclick='Fengetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Inferring binary parameters with dual-line gravitational wave detection from tight inspiraling double neutron stars</td>\
        <td>Phys. Rev. D, 109, 043033<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.043033>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.11241>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109d3033F/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Gamba, R. &<br>Bernuzzi, S.</td>\
        <td>Resonant tides in binary neutron star mergers: Analytical-numerical relativity study</td>\
        <td>Phys. Rev. D, 107, 044014<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.044014>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2207.13106>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107d4014G/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Hu, H. &<br>Freire, P. C. C.</td>\
        <td>Measuring the Lense-Thirring orbital precession and the neutron star moment of inertia with pulsars</td>\
        <td>Universe, 10, 160<br>\
        <a context=citet href=https://doi.org/10.3390/universe10040160>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.18785>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024Univ...10..160H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kraav, K. Y., <br>Gusakov, M. E., &<br>Kantor, E. M.</td>\
        <td>Instability windows of relativistic \\(r\\)-modes</td>\
        <td>Phys. Rev. D, 109, 043012<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.043012>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.06200>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109d3012K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Kumar, D., <br>Malik, T., <br>Mishra, H., &<br>Providência, C.</td>\
        <td>Robust universal relations in neutron star asteroseismology</td>\
        <td>Phys. Rev. D 108, 083008<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.108.083008></a>\
         | <a context=citet href=https://arxiv.org/abs/2306.09277>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.108h3008K/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Levin, Y. &<br>D'Angelo, C.</td>\
        <td>Hydromagnetic and gravitomagnetic crust-core coupling in a precessing neutron star</td>\
        <td>ApJ, 613, 1157<br>\
        <a context=citet href=https://doi.org/10.1086/423197>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/astro-ph/0403014>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2004ApJ...613.1157L/abstract>ADSAbs</a></td>\
        <td>2004</td>\
    </tr>\
    <tr>\
        <td>Ng, H. H.-Y., <br>Cheong, P. C.-K., <br>Lin, L.-M. &<br>L., T. G. F.</td>\
        <td>Gravitational-wave asteroseismology with \\(f\\)-modes from neutron star binaries at the merger phase</td>\
        <td>ApJ, 915, 108<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/ac0141>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2012.08263>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2021ApJ...915..108N/abstract>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Passamonti, A. &<br>Lander, S. K.</td>\
        <td>Quasi-periodic oscillations in superfluid magnetars</td>\
        <td>MNRAS, 438, 156<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stw1880>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1606.02132>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2016MNRAS.463.1173P/abstract>ADSAbs</a></td>\
        <td>2016</td>\
    </tr>\
    <tr>\
        <td>Passamonti, A. &<br>Lander, S. K.</td>\
        <td>Quasi-periodic oscillations in superfluid, relativistic magnetars with pasta phases</td>\
        <td>MNRAS, 463, 1173<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stt2134>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1307.3210>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2014MNRAS.438..156P/abstract>ADSAbs</a></td>\
        <td>2014</td>\
    </tr>\
    <tr>\
        <td>Pretel, J. M. Z., <br>Dutra, M., &<br>Duarte, S. B.</td>\
        <td>Normal oscillation modes and radial stability of neutron stars with a dark-energy core from the Chaplygin gas</td>\
        <td>Phys. Rev. D, 109, 023524<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.023524>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2401.01961>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109b3524P/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Pretel, J. M. Z., <br>Jorás, S. E., <br>Ribamar, R. R. R., &<br>Arbañil, J. D. V.</td>\
        <td>Neutron stars in \\(f(R,T)\\) gravity with conserved energy-momentum tensor: Hydrostatic equilibroum and asteroseismology</td>\
        <td>JCAP 2021, 055<br>\
        <a context=citet href=https://www.doi.org/10.1088/1475-7516/2021/08/055>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/>ArXiv</a>\
         | <a context=citet href=>ADSAbs</a></td>\
        <td>2021</td>\
    </tr>\
    <tr>\
        <td>Radice, D. &<br>Hawke, I.</td>\
        <td>Turbulence modelling in neutron star merger simulations</td>\
        <td>LRCA, 10, 1<br>\
        <a context=citet href=https://doi.org/10.1007/s41115-023-00019-9>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2402.03224>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024LRCA...10....1R/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Rezzolla, L., <br>Most, E. R., &<br>Weih, L. R.</td>\
        <td>Using gravitational-wave observations and quasi-universal relations to constrain the maximum mass of neutron stars</td>\
        <td>ApJL, 852, L25<br>\
        <a context=citet href=https://doi.org/10.3847/2041-8213/aaa401>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/1711.00314>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2018ApJ...852L..25R/abstract>ADSAbs</a></td>\
        <td>2018</td>\
    </tr>\
    <tr>\
        <td>Sagun, V., <br>Panotopoulos, G., &<br>Lopes, I.</td>\
        <td>Asteroseismology: Radial oscillations of neutron stars with realistic equation of state</td>\
        <td>Phys. Rev. D, 101, 063025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.101.063025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2002.12209>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.101f3025S/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Schutz, B. F.</td>\
        <td>Asteroseismology of neutron stars and black holes</td>\
        <td>Jour. Phys.: Conf. Ser., 118, 012005<br>\
        <a context=citet href=https://doi.org/10.1088/1742-6596/118/1/012005>DOI</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2008JPhCS.118a2005S/abstract>ADSAbs</a></td>\
        <td>2008</td>\
    </tr>\
    <tr>\
        <td>Sotani, Hajime</td>\
        <td>Shear and interface modes in neutron stars with pasta structures</td>\
        <td>Phys. Rev. D, 107, 123025<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.107.123025>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2306.07531>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023PhRvD.107l3025S/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Sotani, H. &<br>Dohi, A.</td>\
        <td>Gravitational wave asteroseismology on cooling neutron stars</td>\
        <td>Phys. Rev. D 105, 023007<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.105.023007</a>\
         | <a context=citet href=https://arxiv.org/abs/2201.00648>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2022PhRvD.105b3007S/abstract>ADSAbs</a></td>\
        <td>2022</td>\
    </tr>\
    <tr>\
        <td>Vretinaris, S., <br>Stergioulas, N., &<br>Bauswein, A.</td>\
        <td>Empirical relations for gravitational-wave asteroseismology of binary neutron star mergers</td>\
        <td>Phys. Rev. D 101, 084039<br>\
        <a context=citet href=https://www.doi.org/10.1103/PhysRevD.101.084039</a>\
         | <a context=citet href=https://arxiv.org/abs/1910.10856>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2020PhRvD.101h4039V/abstract>ADSAbs</a></td>\
        <td>2020</td>\
    </tr>\
    <tr>\
        <td>Wang, Y., <br>Bing, Z., <br>Zhu, Z.</td>\
        <td>Anisotropic energy injection from magnetar central engines in short GRBs</td>\
        <td>MNRAS, 528, 3705<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stae136>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2309.15141>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.3705W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Wilson, O. H. &<br>Ho, W. C. G.</td>\
        <td>Gravitational waves from glitch-induced \\(f\\)-mode oscillations in quark and neutron stars</td>\
        <td>Phys. Rev. D, 109, 083006<br>\
        <a context=citet href=https://doi.org/10.1103/PhysRevD.109.083006>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2403.09489>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024PhRvD.109h3006W/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Xu, K. (<span style='font-family:Liu Jian Mao Cao;'>许坤</span>), <br>Yang, H.-R., <br>Mao, Y.-H., <br>Xu, X.-T., <br>Li, X.-D., &<br>Liu, J.</td>\
        <td>Back to the starting point: On the simulation of the initial magnetic fields and spin periods of nonaccreting pulsars</td>\
        <td>ApJ, 947, 76<br>\
        <a context=citet href=https://doi.org/10.3847/1538-4357/acc8ce>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2304.03530>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023ApJ...947...76X/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
    <tr>\
        <td>Yuan, Y. (<span style='font-family:Liu Jian Mao Cao;'>袁泳</span>), <br>Fan, X.-L. <span style='font-family:Liu Jian Mao Cao;'>范锡龙</span>), &<br>Lü, H.-J.</td>\
        <td>Constraining the ellipticity and frequency of binary neutron star remnant via its gravitational-wave and electromagnetic radiations</td>\
        <td>MNRAS, 522, 4294<br>\
        <a context=citet href=https://doi.org/10.1093/mnras/stad1266>DOI</a>\
         | <a context=citet href=https://arxiv.org/abs/2305.01364>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.4294Y/abstract>ADSAbs</a></td>\
        <td>2023</td>\
    </tr>\
</table>\
";

var preprints="\
<table>\
    <tr><th>Authors</th>\
        <th>Title</th>\
        <th>Reference</th>\
        <th>Year</th>\
    </tr>\
    <tr>\
        <td>Ahmed, F.,<br> Sakallı, İ., <br>Al-Badawi, A., &<br>Bouzenada, A.</td>\
        <td>Scalar, vector perturbations and effective Hawking radiation of cylindrical black holes in \\(f(\mathcal{R})\\) and Ricci-inverse gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.00060>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250100060A/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Bucciotti, B., <span id='bucciottietal' onclick='Bucciottietal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Ringdown nonlinearities in the eikonal regime</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.17950>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250117950B/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Carballo-Rubio, D., <span id='carballorubioetal' onclick='CarballoRubioetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Towards a non-singular paradigm of black hole physics</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.05505>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250105505C/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Creci, G., <br>van Gemeren, I., <br>Hniderer, T., &<br>Steinhoff, J.</td>\
        <td>Tidal effects in gravitational waves from neutron stars in scalar-tensor theories of gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.06620>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241206620C/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Das, P., <span id='dasetal' onclick='Dasetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Pulse profiles of accreting neutron stars from GRMHD simulations</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.16528>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241116528D/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Fathi, M. &<br>Övgün, A.</td>\
        <td>Black hole with global monopole charge in self-interacting Kalb-Ramond field</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.09899>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250109899F/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Fynn Diedrichs, R., <br>Tsujikawa, S., &<br>Yagi, K.</td>\
        <td>Tidal Love numbers of neutron stars in Horndeski theories</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.07998>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250107998F/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Gao, Y., <span id='gaoetal' onclick='Gaoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Convective stability analysis of massive neutron stars formed in binary mergers</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.19053>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250119053G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Gavassino, L.</td>\
        <td>Extending Israel-Stewart theory: Causal bulk viscosity at large gradients</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.12543>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250112543G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Guo, X., <span id='guoetal' onclick='Guoetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>There is room at the top: Fundamental quantum limits for detecting ultra-high frequency gravitational waves</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.18146>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250118146G/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>He, K.-J., (<span style='font-family:Liu Jian Mao Cao;'>何柯腱</span>)<br>Yang, C.-J., &<br>Zeng, X.-X. (<span style='font-family:Liu Jian Mao Cao;'>曾晓雄</span>)</td>\
        <td>Optical appearance of the Konoplya-Zhidenko rotating non-Kerr black hole surrounded by a thin accretion disk</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.06778>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250106778H/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Heinz, U. &<br>Schenke, B.</td>\
        <td>Hydrodynamic description of the quark-gluon plasma</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.19393>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241219393H/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Hu, Y. &<br>Kamada, K.</td>\
        <td>Gravitational waves from metastable cosmic strings in the delayed scaling scenario</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.18380>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250118380H/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Karmakar, B. &<br>Djordjevic, M.</td>\
        <td>Radiative energy loss in a dynamically evolving quark-gluon plasma</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.17106>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241217106K/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Koide, S., <br>Noda, S., &<br>Takahashi, M.</td>\
        <td>One-dimensional linear analysis and numerical simulations of Alfv´en waves in a force-free magnetosphere around a Kerr black hole</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.13314>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250113314K/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Li, H.-B., <br>Shao, L., <br>Xia, C.-J. (<span style='font-family:Liu Jian Mao Cao;'>夏铖君</span>), &<br>Xu, R.-X.  (<span style='font-family:Liu Jian Mao Cao;'>徐仁新</span>)</td>\
        <td>Continuous gravitational waves from thermal mountains on accreting neutron stars: Effect of the nuclear pasta phase</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.11075>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241111075L/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Mehta, A. K., <span id='mehtaetal' onclick='Mehtaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Significant increase in sensitive volume of a gravitational wave search upon including higher harmonics</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.17939>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250117939M/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Moriyama, K., <span id='moriyamaetal' onclick='Moriyamaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Black hole accretion and radiation variability in GRMHD simulations with Rezzolla-Zhidenko spacetime</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.08720>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250108720M/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Périgois, C.</td>\
        <td>PRINCESS: Prediction of compact binaries observations with gravitational waves</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16127>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116127P/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Rivieccio, G., <br>Nadal-Matosas, A., <br>Rios, A., &<br>Ruiz, M.</td>\
        <td>The thermal index of neutron-star matter in the virial approximation</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16795>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116795R/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Rosato, R. F., <br>Biswas, S., <br>Chakraborty, S., &<br>Pani, P.</td>\
        <td>Greybody factors, reflectionless scattering modes, and echoes of ultracompact horizonless objects</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.16433>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250116433R/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Saavedra, A., <span id='saavedraaetal' onclick='Saavedraaetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Neutron stars in 4D Einstein-Gauss-Bonnet gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.15459>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241215459S/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Sekhmani, Y., <span id='sekhamietal' onclick='Sekhamietal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>Black holes immersed in polytropic scalar field gas</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.10874https://ui.adsabs.harvard.edu/abs/2025arXiv250110874S/abstract>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250110874S/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Wang, Z.-L. &<br>Battista, E.</td>\
        <td>Dynamical features and shadows of quantum Schwarzschild black hole in effective field theories of gravity</td>\
        <td><a context=citet href=https://arxiv.org/abs/2501.14516>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2025arXiv250114516W/abstract>ADSAbs</a></td>\
        <td>2025</td>\
    </tr>\
    <tr>\
        <td>Yu, C., <br>Zhang, X-, <br>Kazempour, S., &<br>Sun, S.</td>\
        <td>Superradiance in acoustic black hole</td>\
        <td><a context=citet href=https://arxiv.org/abs/2412.20890>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241220890Y/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
    <tr>\
        <td>Zheng, Z.-Y. (<span style='font-family:Liu Jian Mao Cao;'>郑子岳</span>), <span id='zhengetal' onclick='Zhengetal_fullauthorlist()' style='text-decoration:underline;text-decoration-style:dotted;'><i>et al.</i></span></td>\
        <td>\\(f\\)-mode oscillations of hybrid stars with pasta construction</td>\
        <td><a context=citet href=https://arxiv.org/abs/2411.15697>ArXiv</a>\
         | <a context=citet href=https://ui.adsabs.harvard.edu/abs/2024arXiv241115697Z/abstract>ADSAbs</a></td>\
        <td>2024</td>\
    </tr>\
";


const outputs = {
    "all":all,
    "mechanics":mech,
    "planetary-science":planets,
    "hydrodynamics":fluids,
    "accretion-discs":accr,
    "plasma-physics-and-grmhd":plasma,
    "stellar-astrophysics":stars,
    "relativity-and-gravitation":gr,
    "gravitational-waves":gw,
    "black-holes":bh,
    "neutron-stars":ns,
    "preprints":preprints,
};

function keyword_select() {
    var inp = document.getElementById("input");
    var out = document.getElementById("output");
    out.innerHTML = outputs[inp.options[inp.selectedIndex].value];
    MathJax.typeset();
};

function Porthetal_fullauthorlist() {
    var x = document.getElementById("porthetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = porth_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Cooketal_fullauthorlist() {
    var x = document.getElementById("cooketal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = cook_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Smallwoodetal_fullauthorlist() {
    var x = document.getElementById("smallwoodetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = smallwood_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Fasanoetal_fullauthorlist() {
    var x = document.getElementById("fasanoetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = fasano_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Nasimetal_fullauthorlist() {
    var x = document.getElementById("nasimetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = nasim_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Etienneetal_fullauthorlist() {
    var x = document.getElementById("etienneetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = etienne_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Liskaetal_fullauthorlist() {
    var x = document.getElementById("liskaetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = liska_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Dietrichetal_fullauthorlist() {
    var x = document.getElementById("dietrichetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = dietrich_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Charausia1etal_fullauthorlist() {
    var x = document.getElementById("charausia1etal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = charausia1_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Charausia2etal_fullauthorlist() {
    var x = document.getElementById("charausia2etal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = charausia2_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Fengetal_fullauthorlist() {
    var x = document.getElementById("fengetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = feng_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Samsingetal_fullauthorlist() {
    var x = document.getElementById("samsingetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = samsing_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Zwicketal_fullauthorlist() {
    var x = document.getElementById("zwicketal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = zwick_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};
function Ossokineetal_fullauthorlist() {
    var x = document.getElementById("ossokineetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = ossokine_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function CarballoRubioetal_fullauthorlist() {
    var x = document.getElementById("carballorubioetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = carballorubio_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Floresetal_fullauthorlist() {
    var x = document.getElementById("floresetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = flores_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Bucciottietal_fullauthorlist() {
    var x = document.getElementById("bucciottietal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = bucciotti_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Dasetal_fullauthorlist() {
    var x = document.getElementById("dasetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = das_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Gaoetal_fullauthorlist() {
    var x = document.getElementById("gaoetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = gao_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Guoetal_fullauthorlist() {
    var x = document.getElementById("guoetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = guo_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Mehtaetal_fullauthorlist() {
    var x = document.getElementById("mehtaetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = mehta_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Moriyamaetal_fullauthorlist() {
    var x = document.getElementById("moriyamaetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = moriyama_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Saavedraetal_fullauthorlist() {
    var x = document.getElementById("saavedraetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = saavedra_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Sekhamietal_fullauthorlist() {
    var x = document.getElementById("sekhamietal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = sekhami_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};

function Zhengetal_fullauthorlist() {
    var x = document.getElementById("zhengetal");
    if (x.innerHTML === "<i>et al.</i>") {
        x.innerHTML = zheng_long;
        x.style="None"
    } else {
        x.innerHTML = "<i>et al.</i>";
        x.style="text-decoration:underline;text-decoration-style:dotted;"
    }
};



var cook_long="<br>\
Choptuik, M. W.,<br>\
Dubal, M. R.,<br>\
Klasky, S.,<br>\
Matzner, R. A., &<br>\
Oliveira, S. R.";

var smallwood_long="<br>\
Nealon, R., <br>\
Chen, C., <br>\
Martin, R. G., <br>\
Bi, J., <br>\
Dong, R., & <br>\
Pinte, C.";

var fasano_long="<br>\
Winter, A. J., <br>\
Benisty, M., <br>\
Rosotti, G., <br>\
Ruzza, A., <br>\
Lodato, G., <br>\
Toci, C., <br>\
Hilder, T., <br>\
Izquierdo, A., &<br>\
Price, D.";

var nasim_long="<br>\
Fabj, G., <br>\
Caban, F., <br>\
Secunda, A., <br>\
Ford, K. E. S., <br>\
McKernan, B., <br>\
Bellovary, J. M., <br>\
Leigh, N. W. C., &<br>\
Lyra, W.";

var etienne_long="<br>\
Paschalidis, V., <br>\
Haas, R., <br>\
Mösta, P., &<br>\
Shapiro, S. L.";

var liska_long="<br>\
Kaaz, N., <br>\
Chatterjee, K., <br>\
Razieh, E., &<br>\
Musoke, G.";

var porth_long="<br>\
Chatterjee, K., <br>\
Narayan, R., <br>\
Gammie, C. F., <br>\
Mizuno, Yosuke, <br>\
Anninos, P., <br>\
Baker, J. G., <br>\
Bugli, M., <br>\
Chan, C.-K., <br>\
Davelaar, J., <br>\
Del Zanna, L.<br>\
Etienne, Z. B., <br>\
Fragile, P. C., <br>\
Kelly, B. J., <br>\
Liska, M., <br>\
Markoff, S., <br>\
McKinney, J. C., <br>\
Mishra, B., <br>\
Noble, S. C., <br>\
Olivares, H., <br>\
Prather, B., <br>\
Rezzolla, L., <br>\
Ryan, B. R., <br>\
Stone, J. M., <br>\
Tomei, N., <br>\
White, C. J., <br>\
Younsi, Z., <br>\
Akiyama, K., <br>\
Alberdi, A., <br>\
Alef, W., <br>\
Asada, K., <br>\
Azulay, R., <br>\
Baczko, A.-K., <br>\
Ball, D., <br>\
Baloković, M., <br>\
Barrett, J., <br>\
Bintley, D., <br>\
Blackburn, L., <br>\
Boland, W., <br>\
Bouman, K. K., <br>\
Bower, G. C., <br>\
Bremer, M., <br>\
Brinkerink, C. D., <br>\
Brissenden, R., <br>\
Britzen, S., <br>\
Broderick, A. E., <br>\
Broguiere, D., <br>\
Bronzwaer, T., <br>\
Byun, D.-Y., <br>\
Carlstrom, J. E., <br>\
Chael, A., <br>\
Chatterjee, S., <br>\
Chen, M.-T., <br>\
Chen, Y. (<span style='font-family:Liu Jian Mao Cao;'>陈永军</span>), <br>\
Cho, I., <br>\
Christian, P., <br>\
Conway, J. E., <br>\
Cordes, J. M., <br>\
Crew, G. B., <br>\
Cui, Y., <br>\
De Laurentis, M., <br>\
Deane, R., <br>\
Dempsey, J., <br>\
Desvignes, G., <br>\
Doeleman, S. S., <br>\
Eatough, R. P., <br>\
Falcke, H., <br>\
Fish, V. L., <br>\
Fomalont, E., <br>\
Fraga-Encinas, R., <br>\
Freeman, B., <br>\
Friberg, P., <br>\
Fromm, C. M., <br>\
Gómez, J. L., <br>\
Galison, P., <br>\
García, R., <br>\
Gentaz, O., <br>\
Georgiev, B., <br>\
Goddi, C., <br>\
Gold, R., <br>\
Gu, M. (<span style='font-family:Liu Jian Mao Cao;'>顾敏峰</span>), <br>\
Gurwell, M., <br>\
Hada, K., <br>\
Hecht, M. H., <br>\
Hesper, R., <br>\
Ho, L. C. (<span style='font-family:Liu Jian Mao Cao;'>何子山</span>), <br>\
Ho, P., <br>\
Honma, M., <br>\
Huang, C.-W. L., <br>\
Huang, L. (<span style='font-family:Liu Jian Mao Cao;'>黄磊</span>), <br>\
Hughes, D. H., <br>\
Ikeda, S., <br>\
Inoue, M., <br>\
Issaoun, S., <br>\
James, D. J., <br>\
Jannuzi, B. T., <br>\
Janssen, M., <br>\
Jeter, B., <br>\
Jiang, W. (<span style='font-family:Liu Jian Mao Cao;'>江悟</span>), <br>\
Johnson, M. D., <br>\
Jorstad, S., <br>\
Jung, T., <br>\
Karami, M., <br>\
Karuppusamy, R., <br>\
Kawashima, T., <br>\
Keating, G. K., <br>\
Kettenis, M., <br>\
Kim, J.-Y., <br>\
Kim, J., <br>\
Kim, J., <br>\
Kino, M., <br>\
Koay, J. Y., <br>\
Koch, P. M., <br>\
Koyama, S., <br>\
Kramer, M., <br>\
Kramer, C., <br>\
Krichbaum, T. P., <br>\
Kuo, C.-Y., <br>\
Lauer, T. R., <br>\
Lee, S.-S., <br>\
Li, Y.-R. (<span style='font-family:Liu Jian Mao Cao;'>李彦荣</span>), <br>\
Li, Z. (<span style='font-family:Liu Jian Mao Cao;'>李志远</span>), <br>\
Lindqvist, M., <br>\
Liu, K., <br>\
Liuzzo, E., <br>\
Lo, W.-P., <br>\
Lobanov, A. P., <br>\
Loinard, L., <br>\
Lonsdale, C., <br>\
Lu, R.-S. (<span style='font-family:Liu Jian Mao Cao;'>路如森</span>), <br>\
MacDonald, N. R., <br>\
Mao, J. (<span style='font-family:Liu Jian Mao Cao;'>毛基荣</span>), <br>\
Marrone, D. P., <br>\
Marscher, A. P., <br>\
Martí-Vidal, I., <br>\
Matsushita, S., <br>\
Matthews, L. D., <br>\
Medeiros, L., <br>\
Menten, K. M., <br>\
Mizuno, I., <br>\
Moran, J. M., <br>\
Moriyama, K., <br>\
Moscibrodzka, M., <br>\
Müller, C., <br>\
Nagai, H., <br>\
Nagar, N. M., <br>\
Nakamura, M., <br>\
Narayanan, G., <br>\
Natarajan, I., <br>\
Neri, R., <br>\
Ni, C., <br>\
Noutsos, A., <br>\
Okino, H., <br>\
Oyama, T., <br>\
Özel, F., <br>\
Palumbo, D. C. M., <br>\
Patel, N., <br>\
Pen, U.-L., <br>\
Pesce, D. W., <br>\
Piétu, V., <br>\
Plambeck, R., <br>\
PopStefanija, A., <br>\
Preciado-López, J. A., <br>\
Psaltis, D., <br>\
Pu, H.-Y., <br>\
Ramakrishnan, V., <br>\
Rao, R., <br>\
Rawlings, M. G., <br>\
Raymond, A. W., <br>\
Ripperda, B., <br>\
Roelofs, F., <br>\
Rogers, A., <br>\
Ros, E., <br>\
Rose, M., <br>\
Roshanineshat, A., <br>\
Rottman, H., <br>\
Roy, A. L., <br>\
Ruszczyk, C., <br>\
Rygl, K. L. J., <br>\
Sánchez, S., <br>\
Sánchez-Arguelles, D., <br>\
Sasada, M., <br>\
Savolainen, T., <br>\
Schloerb, F. P., <br>\
Schuster, K.-F., <br>\
Shao, L., <br>\
Shen, Z. (<span style='font-family:Liu Jian Mao Cao;'>沈志强</span>), <br>\
Small, D., <br>\
Sohn, B. W., <br>\
SooHoo, J., <br>\
Tazaki, F., <br>\
Tiede, P., <br>\
Tilanus, R. P. J., <br>\
Titus, M., <br>\
Toma, K., <br>\
Torne, P., <br>\
Trent, T., <br>\
Trippe, S., <br>\
Tsuda, S., <br>\
van Bemmel, I., <br>\
van Langevelde, H. J., <br>\
van Rossum, D. R., <br>\
Wagner, J., <br>\
Wardle, J., <br>\
Weintroub, J., <br>\
Wex, N., <br>\
Wharton, R., <br>\
Wielgus, M., <br>\
Wong, G. N., <br>\
Wu, Q. (<span style='font-family:Liu Jian Mao Cao;'>吴庆文</span>), <br>\
Young, K., <br>\
Young, A., <br>\
Yuan, F. (<span style='font-family:Liu Jian Mao Cao;'>袁峰</span>), <br>\
Yuan, Y.-F. (<span style='font-family:Liu Jian Mao Cao;'>袁业飞</span>), <br>\
Zensus, J. A., <br>\
Zhao, G., <br>\
Zhao, S.-S., &<br>\
Zhu, Z.<br>\
(The Event Horizon Telescope Collaboration)";

var dietrich_long="<br>\
Ujevic, M., <br>\
Tichy, W., <br>\
Bernuzzi, S., &<br>\
Brügmann, B.";

var charausia1_long="<br>\
Dietrich, T., <br>\
Johnson-McDaniel, N. K., <br>\
Ujevic, M., <br>\
Tichy, W., &<br>\
Brügmann, B.";

var charausia2_long="<br>\
Dietrich, T., <br>\
Ujevic, M., <br>\
Hendriks, K., <br>\
Dudi, R., <br>\
Fabbri, F. M., <br>\
Tichy, W., &<br>\
Brügmann, B.";

var feng_long="<br>\
Chen, J.-W., <br>\
Liu, T., <br>\
Wang, Y., &<br>\
Mohanty, S. D.";

var samsing_long="<br>\
Hendriks, K., <br>\
Zwick, L., <br>\
D'Orazio, D. J., &<br>\
Liu, B.";

var zwick_long="<br>\
Tiede, C., <br>\
Trani, A. A., <br>\
Derdzinski, A., <br>\
Haiman, Z., <br>\
D'Orazio, D. J., &<br>\
Samsing, J.";

var ossokine_long="<br>\
Buonanno A., <br>\
Marsat, S., <br>\
Cotesta, R., <br>\
Babak, S., <br>\
Dietrich, T., <br>\
Haas, R., <br>\
Hinder, I., <br>\
Pfeiffer, H. P., <br>\
Pürrer, M., <br>\
Woodford, C. J., <br>\
Boyle, M., <br>\
Kidder, L. E., <br>\
Scheel, M. A., &<br>\
Szilágyi, B.";

var carballorubio_long="<br>\
Di Filippo, F., <br>\
Liberati, S., <br>\
Visser, M., <br>\
Arrechea, J., <br>\
Barceló, C., <br>\
Bonanno, A., <br>\
Borissova, J., <br>\
Boyanov, V., <br>\
Cardoso, V., <br>\
Del Porro, F., <br>\
Eichhorn, A., <br>\
Jampolski, D., <br>\
Martín-Moruno, P., <br>\
Mazza, J., <br>\
McMaken, T., <br>\
Panassiti, A., <br>\
Pano, P., <br>\
Platania, A., <br>\
Rezzolla, L., &<br>\
Vellucci, V.";

var flores_long="<br>\
Lenzi, C. H., <br>\
Dutra, M., <br>\
Lourenço, O., &<br>\
Arbañil, J. D. V.";

var bucciotti_long="<br>\
Cardoso, V., <br>\
Kuntz, A., <br>\
Pereñiguez, D., &<br>\
Redondo-Yuste, J.";

var das_long="<br>\
Salmi, T., <br>\
Davelaar, J., <br>\
Porth, O., &<br>\
Watts, A.";

var gao_long="<br>\
Hayashi, K., <br>\
Kiuchi, K., <br>\
Tsz-Lok Lam, A., <br>\
Kuan, H.-J., &<br>\
Shibata, M.";

var guo_long="<br>\
Miao, H., <br>\
Wang, Z.-W., <br>\
Yang, H., &<br>\
Zhou, Y.-L.";

var mehta_long="<br>\
Wadekar, D., <br>\
Roulet, J., <br>\
Anantpurkar, I., <br>\
Venumadhav, T., <br>\
Mushkin, J., <br>\
Zackay, B., <br>\
Zaldarriaga, M., &<br>\
Islam, T.";

var moriyama_long="<br>\
Cruz-Osorio, A., <br>\
Mizuno, Y., <br>\
Dihingia, I. K., &<br>\
Uniyal, A.";

var saavedra_long="<br>\
Fierro, O., <br>\
Gammon, M., <br>\
Mann, R. B., <br>\
Rubilar, G.";

var sekhami_long="<br>\
Zare, S., <br>\
Nieto, L. M., <br>\
Hassanabadi, H., &<br>\
Boshkayev, K.";

var zheng_long="<br>\
Wei, J.-B. (<span style='font-family:Liu Jian Mao Cao;'>魏金标</span>),<br>\
Chen, H. (<span style='font-family:Liu Jian Mao Cao;'>陈欢</span>), <br>\
Zheng, X.-P. (<span style='font-family:Liu Jian Mao Cao;'>郑小平</span>), <br>\
Burgio, G. F., &<br>\
Schulze, H.-J.";