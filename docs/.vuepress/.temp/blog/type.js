export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-70bc2959","v-2e25198a","v-9a72c4ae","v-1be8c5c4","v-9a72c470","v-f6a06ba6","v-9a72bbf6","v-9a726960","v-884a0bbc","v-d440f426","v-21ba2ec8","v-2921a50f","v-16722c46","v-6cec0ebc","v-48579df1","v-4c274696","v-03c5c12d","v-6ce7b6da","v-594b2522","v-5e01a32b","v-a94b64b0","v-ebd584f6","v-004e2d72","v-66839488","v-a28a27e0","v-71afee22","v-3f9113da","v-04c0516d","v-56c36d18","v-e0b06004","v-5adb4bb0","v-673af10a","v-b4f56eb4","v-83adc5ae","v-c124708c","v-591d90c7","v-8762bc94","v-a0975708","v-ad60031e","v-446027a3","v-e9733bf2","v-b012e064","v-68410858","v-23ccb63e","v-fcbb12d8","v-836b6296","v-4ad17048","v-3174569a","v-336c56b0","v-5d392287","v-13488212","v-c0ae6f78","v-547ba0ea","v-c22f3110","v-53fcb98a"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });
