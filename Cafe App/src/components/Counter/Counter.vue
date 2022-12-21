<template>
    <div v-if="(items.find( (item) => item.id === 'pcoffee').ischanged) " id="Button_CTA_bw">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <svg @click="subtractButton('pcoffee')" class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <svg @click="addButton('pcoffee')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'pcoffee').count}}</span>
        </div>
    </div>
    <div v-else @click="submitHandler('pcoffee')" id="Button_CTA_bw">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
	</div>

    <div v-if="(items.find( (item) => item.id === 'bcoffee').ischanged)" id="Add_Button">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('bcoffee')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <div></div>
        <svg @click="addButton('bcoffee')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'bcoffee').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('bcoffee')" id="Add_Button">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>


    <div v-if="(items.find( (item) => item.id === 'vidli').ischanged)" id="Add_Button_b">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('vidli')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <div></div>
        <svg @click="addButton('vidli')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'vidli').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('vidli')" id="Add_Button_b">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>


    <div v-if="(items.find( (item) => item.id === 'idli').ischanged)" id="Add_Button_ca">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('idli')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <div></div>
        <svg @click="addButton('idli')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'idli').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('idli')" id="Add_Button_ca">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>
    

    <div v-if="(items.find( (item) => item.id === 'vada').ischanged)" id="Add_Button_cb">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('vada')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <div></div>
        <svg @click="addButton('vada')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'vada').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('vada')" id="Add_Button_cb">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>


    <div v-if="(items.find( (item) => item.id === 'ridli').ischanged)" id="Add_Button_cd">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('ridli')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <svg @click="addButton('ridli')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'ridli').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('ridli')" id="Add_Button_cd">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>


    <div v-if="(items.find( (item) => item.id === 'mdosa').ischanged)" id="Add_Button_cg">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div @click="subtractButton('mdosa')">
        <svg class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        </div >
        <div></div>
        <svg @click="addButton('mdosa')" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === 'mdosa').count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler('mdosa')" id="Add_Button_cg">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
    </div>

    <keep-alive>
    <Tab :cart="cart"></Tab>
    </keep-alive>
</template>

<script>
import Tab from './Tab/Tab.vue'
export default {
    components: 
    {
        Tab,
    },
    provide()
    {
        return {
            cart: this.cart
        }
    },
    data ()
    {   
        return {
        cart: [],
        items: [
            {
                id: 'pcoffee',
                price: 25,
                ischanged: false,
                count: 0
            },
            {
                id: 'bcoffee',
                price: 20,
                ischanged: false,
                count: 0

            },
            {
                id: 'vidli',
                price: 50,
                ischanged: false,
                count: 0

            },
            {
                id: 'idli',
                price: 40,
                ischanged: false,
                count: 0

            },
            {
                id: 'vada',
                price: 45,
                ischanged: false,
                count: 0

            },
            {
                id: 'ridli',
                price: 40,
                ischanged: false,
                count: 0

            },
            {
                id: 'mdosa',
                price: 50,
                ischanged: false,
                count: 0

            },
        ],
        }
    },
    methods:
    {
        submitHandler(id)
        {
            this.cart.push( this.items.find( (item) => item.id === id))
            this.items.find( (item) => item.id === id).count++
            this.updateButton(id)
        },
        updateButton(id)
        {
            this.items.find( (item) => item.id === id).ischanged = true
            console.log(this.items.find( (item) => item.id === id).count)
        },
        subtractButton(id)
        {  
           const obj = this.items.find( (item) => item.id === id)
           obj.count--
           if (obj.count<1)
           {
            obj.ischanged = false
            const remindex = this.cart.findIndex(res => res.id == id)
            this.cart.splice(remindex, 1)
           } 
        },
        addButton(id)
        {
            const obj = this.items.find( (item) => item.id === id)
           obj.count++
        },
        check()
        {
            console.log(this.cart)
        }
    }
}
</script>