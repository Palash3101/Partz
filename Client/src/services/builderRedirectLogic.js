import cookie from "js-cookie";

export default function RedirectBuilder() {
  const currentBuild = cookie.get("currentBuild");

  if (currentBuild){
    console.log("Current Build:", currentBuild);
    Redirect(currentBuild);
  }
  else{
    NewBuild();
  }
}

function Redirect(buildId){
  window.location.href = `/builder/${buildId}`;
}

function NewBuild(){
  console.log("No current build found, redirecting to new page");
  

}