import React from 'react'
import { Button } from 'semantic-ui-react'

export const HeaderPage = ({ title, btnTitle, btnClick }) => {

    return (
        
        <div className="header-page-admin">
            <h2>{ title }</h2>
            <div>
                { btnTitle && (
                    <Button positive onClick={ btnClick }>
                        { btnTitle }
                    </Button>
                )}
            </div>
        </div>

    )

}
