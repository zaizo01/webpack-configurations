import '../css/components.css';

export const say_hello = ( name ) => {
    console.log( 'creando...' );

    const h1 = document.createElement('h1');
    h1.innerText = `hello, ${ name }`;
    document.body.append( h1 );
}