import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import { INaming, IOption } from './interface-form';
import ReactSelect from 'react-select';

 const options: IOption[] = [{
  value: 'Mercedes',
  label: 'Mercedes-Benz'
},{
  value: 'Bentley',
  label: 'Bentley'
},{
  value: 'Porsche',
  label: 'Porsche'
},{
  value: 'Жигули',
  label: 'Жигули'
},
]

const getValue = (value:string) =>
  value? options.find(option => option.value === value) : ''


function FormSubmit () {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
    control,
  } = useForm<INaming>({
    mode: 'onChange'
  })

  const onSubmit:SubmitHandler<INaming> = (data) => {
    alert(`Your name ${data.name}`)
    reset()
  }

  console.log(errors)

  return  (
  <div>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register('name',

    {
      required: 'Введите Ваше имя !',
    })}
    placeholder='Имя'
    />
    {errors?.name && (
      <div style={{ color: 'red' }}>{errors.name.message}</div>
    )}

    <input {...register('lastname',

    {
      required: 'Введите Вашу фамилию !',
    })}
    placeholder='Фамилия'
    />
    {errors?.lastname && (
      <div style={{ color: 'red' }}>{errors.lastname.message}</div>
    )}


      <input {...register('email',

    {
      required: 'Введите Вашу почту !',
      pattern:{
        value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
        message: 'Пожалуйста введите правильный тип почты!'
      }
    })}
    placeholder='eMail'
    />
    {errors?.email && (
      <div style={{ color: 'red' }}>{errors.email.message}</div>
    )}
        <input {...register('old',

    {
      required: 'Введите год выпуска авто !',
    })}
    />
    {errors?.old && (
      <div style={{ color: 'red' }}>{errors.old.message}</div>
    )}

      <Controller
      control={control}
      name='address.model'
      rules={{
        required:'Модель авто обязательно!',
      }}
      render={({ field:{onChange, value} , fieldState: { error } } ) => (
       <div>
       <ReactSelect
          placeholder='Укажите модель авто'
          options={options}
          value={getValue(value)}
          onChange={newValue => onChange((newValue as IOption).value)}


        />
        {error && <div style={{ color: 'red' }}>{error.message}
          </div>}
        </div>)
}
      />

      <input {...register('comment',

      {
        required: 'Введите описание проблемы !',
      })}
      placeholder='Комментарий'
      />
      {errors?.comment && (
        <div style={{ color: 'red' }}>{errors.comment.message}</div>
      )}



  <div>
    <button>Отправить</button>
  </div>
    </form>
    <div>
      <button onClick={() => {
        setValue('name', 'Шляпа')
        setValue('email', 'test@test.ru')
      }}
      >
        Заполнить данные
      </button>
    </div>


  </div>
  )
}

export default FormSubmit;
