import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <div>
        <div id='navbar' className='imgss'>
          <div>
            <img className='img-icon' src='https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' alt=''></img>
            <img className='img-iconnn' src='https://www.iconbolt.com/iconsets/ant-design-outline/menu-fold.svg' alt=''></img>

          </div>
          <div id='t-imgs' className='imgs'>
            <img className='moonimg' src='https://www.freeiconspng.com/uploads/crescent-moon-png-21.png' alt=''></img>
            <img className='notiimg' src='http://cdn.onlinewebfonts.com/svg/img_489991.png' alt=''></img>
            <img className='lanimg' src='https://upload.wikimedia.org/wikipedia/commons/c/c0/Language_icon.png?20201112103601' alt=''></img>
            <img className='img-icon1' src='https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' alt=''></img>


          </div>

        </div>

        <div>
          <div id='d-i-o-s-c'>
            <div className='d-i-o-s-c'>
              <img src='https://aux.iconspalace.com/uploads/dashboard-icon-256-1241939503.png' alt=''></img>
              <h4>dashboard</h4>
            </div>
            <div className='d-i-o-s-c'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQQIB1bXkuNHQMCzH4UyLltTptzZog5H1Yw&usqp=CAU' alt=''></img>
              <h4>Inventory</h4>
            </div>
            <div className='d-i-o-s-c' id='order'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXTT0cczWzIZolz45zacYZxDae0Mslx_xFdzu2TEPOH2uiot0fODr23lwhwiI_WQAH80&usqp=CAU' alt=''></img>
              <h4>Orders</h4>
              <div id='empty'></div>
            </div>
            <div className='d-i-o-s-c'>
              <img src='https://icon-library.com/images/delivery-truck-icon-png/delivery-truck-icon-png-18.jpg'alt=''></img>
              <h4>Shipping</h4>
            </div>
            <div className='d-i-o-s-c'>
              <img src='https://www.kindpng.com/picc/m/734-7345369_share-android-share-line-icon-png-transparent-png.png' alt=''></img>
              <h4>Channel</h4>
            </div>

          </div>








          {/* ////////////////////////////////////////// */}
          <div className='big-div'>
              <div id='big-div'>
                <div style={{display: "flex"}}>
                  <div>
                    <div  id='ord'>
                      <h5 id='ordes'>Orders</h5>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqz_LQlBsT2NMfuknxKdJIXlUWYg0qqtg_RGIU4OsBBkPHaEFhCTW609i3UC9NbKBhVSQ&usqp=CAU' alt=''></img>
                    </div>
                  </div>

                </div>
                <div id='sett'>
                  <img className='settimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png' alt=''></img>
                </div>
              </div>
              <div className='text'>
                <div>
                  <h4 className='pending-text'>Pending</h4>
                </div>
                <div>
                  <h4>Accepted</h4>
                </div>
                <div>
                  <h4>AWB Created</h4>
                </div>
                <div>
                  <h4>Ready to Ship</h4>
                </div>
                <div>
                  <h4>Shipped</h4>
                </div>
                <div>
                  <h4>Completed</h4>
                </div>
                <div>
                  <h4>Cancelled</h4>
                </div>
              </div>

            </div>
            <div id='twodivs'>
              <div style={{display: "flex"}} className="iap" id='iap'>
                <div style={{display: "flex"}} className="imp">
                  <img id='import' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWesq-l2-8uMac8mfeR3b02f2bQ750zJBXC3NMzDTjZxk1FaglumRhMFRFKqxfRDNWzw&usqp=CAU' alt=''></img>
                  <h5>Import Orders</h5>
                </div>
                <div style={{display: "flex"}} className="acc">
                  <img id='accept' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2nye6UECW6lCuHN1u-DocqngZLMrwA03-w&usqp=CAU' alt=''></img>
                  <h5>Accept</h5>
                </div>
                <div style={{display: "flex"}} className="pri">
                  <img id='print' src='https://icons-for-free.com/download-icon-document+networkprinter+office+outline+print+printer+icon-1320161597957939000_512.png'alt=''></img>
                  <h5>Print</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>          
                </div>
                <button className='ref'><img className='refresh' src='https://cdn-icons-png.flaticon.com/512/1182/1182684.png'alt=''></img>Refresh</button>

              </div>
              <div className='tabl'>
                <table>

                  <tr>
                    <input type="checkbox" id='top' name="topping" value="" />
                    <th></th>
                    <th className='channel'>Channel <img className='updown' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img><img className='filter' src='https://spng.pinpng.com/pngs/s/113-1130258_1600-x-1600-6-filter-icon-png-transparent.png'alt=''></img></th>
                    <th>Order No <img className='updownn' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img><img className='sss' src='https://cdn.icon-icons.com/icons2/1673/PNG/512/searchoutline_110754.png'alt=''></img></th>
                    <th className='ord'>Order Date <img className='updow' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img><img className='ss' src='https://cdn.icon-icons.com/icons2/1673/PNG/512/searchoutline_110754.png'alt=''></img></th>
                    <th>City <img className='updo' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img></th>
                    <th className='csn'>Customer Name <img className='s' src='https://cdn.icon-icons.com/icons2/1673/PNG/512/searchoutline_110754.png'alt=''></img></th>
                    <th id='orderwid'>Order value <img className='upd' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img></th>
                    <th className='sts'>Status <img className='up' src='https://static.thenounproject.com/png/880275-200.png' alt=''></img></th>
                    <th className='oper'>Operation</th>


                  </tr>
                  <tr>
                    <img className='plus' src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-plus-science-education-dreamstale-lineal-dreamstale.png' alt=''></img>
                    <input type="checkbox" className='topp' name="topping" value="" />
                    <td></td>
                    <img className='s-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYDAkaj4KCRJEjRqkQkxKVcaikkpt_M3fGmFVkoe9DedQH9YFBdF95n4fqOTNxYxWG0g&usqp=CAU' alt=''></img>
                    <td>#TKN20203754</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td className='penddd'>pending</td>
                    <select className='sele'>
                      <option>Actions</option>
                    </select>
                  </tr>
                  <tr>
                    <img className='plus' src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-plus-science-education-dreamstale-lineal-dreamstale.png' alt=''></img>
                    <input type="checkbox" className='topp' name="topping" value="" />
                    <td></td>
                    <img className='s-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYDAkaj4KCRJEjRqkQkxKVcaikkpt_M3fGmFVkoe9DedQH9YFBdF95n4fqOTNxYxWG0g&usqp=CAU' alt=''></img>
                    <td>#TKN20203753</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td className='penddd'>pending</td>
                    <select className='sele'>
                      <option>Actions</option>
                    </select>
                  </tr>
                  <tr>
                    <img className='plus' src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-plus-science-education-dreamstale-lineal-dreamstale.png' alt=''></img>
                    <input type="checkbox" className='topp' name="topping" value="" />
                    <td></td>
                    <img className='s-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYDAkaj4KCRJEjRqkQkxKVcaikkpt_M3fGmFVkoe9DedQH9YFBdF95n4fqOTNxYxWG0g&usqp=CAU' alt=''></img>
                    <td>#TKN20203752</td>
                    <td>2022-05-04</td>
                    <td>Lucknow</td>
                    <td>Abhishek Dixit</td>
                    <td>0.00</td>
                    <td className='penddd'>pending</td>
                    <select className='sele'>
                      <option>Actions</option>
                    </select>
                  </tr>

                </table>
              </div>
            </div>

          </div>
          {/* <hr></hr> */}

          <h4 id='avator'>avator</h4>

          <div className='footer'>
            <button className='btns'><img className='btnimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSycTBw6NFS7bWkogxROrc5Rnf8I2QcM02DQ6NQuZi0NtKN9BIDAzaeQpu8aKcUNic6k&usqp=CAU' alt=''></img></button>
            <button className='one'>1</button>
            <button className='btns'><img className='btnimgg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KxlQzD1PXjn_rZxElrGqsPlWT1SZKjh9s5gPMaEo5daIMWtHk7J3thCTuSU0F_dT6SI&usqp=CAU'alt=''></img></button>
            <select className='selepage'>
              <option>
                20/page
              </option>
            </select>
          </div>







      </div>


      </>

    </div>
  );
}

export default App;
