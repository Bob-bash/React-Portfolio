const inistate={
    selected:'home'
}
export default function reducer( state = inistate, action ) {
	switch ( action.type ) { 
	case "SELECTED" : return { selected :action.payload}
	default : return state
}
}