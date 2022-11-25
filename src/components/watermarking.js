import React,{Component} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Watermark extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedcover: null,
        selectedwatermark: null,
        loaded:0,
      }
   
  }
  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files 
    //define message container
    let err = []
    // list allow mime type
   const types = ['image/png', 'image/jpeg' , 'image/jpg']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container   
         err[x] = files[x].type+' is not a supported format\n';
       }
     };
     for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
         // discard selected file
        toast.error(err[z])
        event.target.value = null
    }
   return true;
  }
//   maxSelectFile=(event)=>{
//     let files = event.target.files
//         if (files.length > 1) { 
//            const msg = 'Only 3 images can be uploaded at a time'
//            event.target.value = null
//            toast.warn(msg)
//            return false;
//       }
//     return true;
//  }
 checkFileSize=(event)=>{
  let files = event.target.files
  let size = 2000000 
  let err = []; 
  for(var x = 0; x<files.length; x++) {
  if (files[x].size > size) {
   err[x] = files[x].type+'is too large, please pick a smaller file\n';
 }
};
for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
  // discard selected file
 toast.error(err[z])
 event.target.value = null
}
return true;
}
onChangeHandler1=event=>{
  var file1 = event.target.files
  if(this.checkMimeType(event) &&    this.checkFileSize(event)){ 
  // if return true allow to setState
     this.setState({
     selectedcover: file1,
     loaded:0
  })
}
}
onChangeHandler2=event=>{
    var file2 = event.target.files
    if(this.checkMimeType(event) &&    this.checkFileSize(event)){ 
    // if return true allow to setState
       this.setState({
       selectedwatermark: file2,
       loaded:0
    })
  }
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file1', this.state.selectedcover)
    data.append('file2', this.state.selectedwatermark)
    axios.post("http://localhost:8000/upload", data)
      .then(res => { // then print response status
        toast.success('upload success')
        this.props.history.push('/download')
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
        
      })

      console.log(this.state.selectedcover)
      console.log(this.state.selectedwatermark)
      

    }

  render() {
    return (
    //   <div class="container">
	//       <div class="row">
    //   	  <div class="offset-md-3 col-md-6">
    //            <div class="form-group files">
    //             <label>Upload Your File </label>
    //             <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
    //           </div>  
    //           <div class="form-group">
    //           <ToastContainer />
    //           </div> 

	//       </div>
    //   </div>
    //   </div>
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <div class="flex w-full h-full justify-center mt-8">
              <div class="w-full rounded-lg shadow-xl bg-gradient-to-r from-green-200 to-purple-300">
                <div class="m-4">
                  <div class="flex flex-col">
                    <h1 class="text-center mb-5 text-4xl text-indigo-900">
                      WATERMARKING
                    </h1>
                    <label class="inline-block mb-2 text-black-800 text-2xl">
                      Files Upload
                    </label>
                  </div>
                  <div class="md:flex md:flex-row md:gap-x-2 sm:flex sm:flex-col sm:gap-y-4">
                    <div class="flex items-center justify-center w-full form-group files">
                      <label class="flex flex-col w-full h-48 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div class="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-black-800 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            /> 
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-black-800 group-hover:text-gray-600">
                            Attach cover image
                          </p> 
                        </div>
                        <input type="file" class="form-control" onChange={this.onChangeHandler1}/>
                      </label>
                    </div> 
                    <div class="form-group">
               <ToastContainer />
               </div>
                    <div class="flex items-center justify-center w-full form-group files">
                      <label class="flex flex-col w-full h-48 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div class="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-black-800 group-hover:text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-black-800 group-hover:text-gray-600">
                            Attach image to Watermark
                          </p>
                        </div>
                        <input type="file" class="form-control" onChange={this.onChangeHandler2}/>
                      </label>
                    </div>
                    <div class="form-group">
                        <ToastContainer />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center p-2">
                  <button onClick={this.onClickHandler} class="w-full px-4 py-2 text-2xl text-center hover:bg-transparent  text-fuchsia-200 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded shadow-xl" >
                    Watermark
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Watermark;