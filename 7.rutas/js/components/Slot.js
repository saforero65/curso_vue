Vue.component('modal-bootsrap', {
    template: `    
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
          <slot name="header"></slot>
          
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <slot></slot>
          </div>
          <div class="modal-footer">
          
          <slot name="footer"></slot>
           
          </div>
        </div>
      </div>
    </div>   
`
})