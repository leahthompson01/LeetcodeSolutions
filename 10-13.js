function domainName(url){
    let parsedDomain
    if(url.startsWith('http://')){
        parsedDomain = url.replace("http://","")
    //   console.log(parsedDomain)
    }else if(url.startsWith("https://")){
      parsedDomain = url.replace("https:/","")
    //   console.log(parsedDomain)
    }else if(url.startsWith('www.')){
        parsedDomain = url.replace("www.","")
    }
    // console.log(parsedDomain)
    if(parsedDomain.startsWith('www.')){
        parsedDomain = parsedDomain.replace("www.","")
    //   console.log(parsedDomain)
    }
   console.log(parsedDomain.split('.')[0])
  }
domainName("http://www.zombie-bites.com")